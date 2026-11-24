//# sourceMappingURL=data.mjs.map
import * as $json from "../gleam_json/gleam/json.mjs";
import * as $decode from "../gleam_stdlib/gleam/dynamic/decode.mjs";
import * as $list from "../gleam_stdlib/gleam/list.mjs";
import * as $result from "../gleam_stdlib/gleam/result.mjs";
import {
  storageGet as storage_get,
  storageSet as storage_set,
  downloadText as download_text,
  promptDrawingName as prompt_drawing_name,
} from "./data_ffi.mjs";
import * as $examples from "./examples.mjs";
import {
  Ok,
  Empty as $Empty,
  List$Empty$const as $List$Empty$const,
  prepend as listPrepend,
} from "./gleam.mjs";

export { download_text, prompt_drawing_name, storage_get, storage_set };

const storage_key = "animator-library-v1";

/**
 * Invalid or unavailable storage falls back to the bundled drawings.
 */
export function load() {
  let fallback = [$examples.all, "fan"];
  let drawing = $decode.field(
    "name",
    $decode.string,
    (name) => {
      return $decode.field(
        "source",
        $decode.string,
        (source) => { return $decode.success([name, source]); },
      );
    },
  );
  let decoder = $decode.field(
    "drawings",
    $decode.list(drawing),
    (drawings) => {
      return $decode.field(
        "selected",
        $decode.string,
        (selected) => { return $decode.success([drawings, selected]); },
      );
    },
  );
  let $ = storage_get(storage_key);
  if ($ instanceof Ok) {
    let text = $[0];
    let $1 = $json.parse(text, decoder);
    if ($1 instanceof Ok) {
      let $2 = $1[0][0];
      if ($2 instanceof $Empty) {
        return fallback;
      } else {
        let drawings = $2;
        let selected = $1[0][1];
        let first = $2.head[0];
        let _block;
        let $3 = $list.key_find(drawings, selected);
        if ($3 instanceof Ok) {
          _block = selected;
        } else {
          _block = first;
        }
        let selected$1 = _block;
        return [drawings, selected$1];
      }
    } else {
      return fallback;
    }
  } else {
    return fallback;
  }
}

export function save(drawings, selected) {
  let _pipe = $json.object(
    listPrepend(
      ["selected", $json.string(selected)],
      listPrepend(
        [
          "drawings",
          $json.array(
            drawings,
            (drawing) => {
              return $json.object(
                listPrepend(
                  ["name", $json.string(drawing[0])],
                  listPrepend(
                    ["source", $json.string(drawing[1])],
                    $List$Empty$const,
                  ),
                ),
              );
            },
          ),
        ],
        $List$Empty$const,
      ),
    ),
  );
  let _pipe$1 = $json.to_string(_pipe);
  return ((_capture) => { return storage_set(storage_key, _capture); })(_pipe$1);
}

export function source(drawings, name, fallback) {
  let _pipe = $list.key_find(drawings, name);
  return $result.unwrap(_pipe, fallback);
}

/**
 * Replace a saved drawing in place, retaining the order of the menu.
 */
export function update(drawings, name, source) {
  return $list.map(
    drawings,
    (drawing) => {
      let $ = drawing[0] === name;
      if ($) {
        return [name, source];
      } else {
        return drawing;
      }
    },
  );
}
