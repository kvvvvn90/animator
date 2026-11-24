//# sourceMappingURL=app.mjs.map
import * as $float from "../gleam_stdlib/gleam/float.mjs";
import * as $int from "../gleam_stdlib/gleam/int.mjs";
import * as $list from "../gleam_stdlib/gleam/list.mjs";
import * as $result from "../gleam_stdlib/gleam/result.mjs";
import * as $string from "../gleam_stdlib/gleam/string.mjs";
import * as $lustre from "../lustre/lustre.mjs";
import * as $attr from "../lustre/lustre/attribute.mjs";
import * as $effect from "../lustre/lustre/effect.mjs";
import * as $element from "../lustre/lustre/element.mjs";
import * as $html from "../lustre/lustre/element/html.mjs";
import * as $event from "../lustre/lustre/event.mjs";
import * as $builtins from "./builtins.mjs";
import * as $data from "./data.mjs";
import * as $drawing from "./drawing.mjs";
import * as $editor from "./editor.mjs";
import * as $errors from "./errors.mjs";
import * as $examples from "./examples.mjs";
import {
  Ok,
  List$Empty$const as $List$Empty$const,
  prepend as listPrepend,
  CustomType as $CustomType,
  makeError,
} from "./gleam.mjs";
import * as $parser from "./parser.mjs";
import * as $render from "./render.mjs";
import * as $shape from "./shape.mjs";

const FILEPATH = "src/app.gleam";

export class Model extends $CustomType {
  constructor(source, code_open, output, paths, shape_slider, speed, playing, drawings, selected, color) {
    super();
    this.source = source;
    this.code_open = code_open;
    this.output = output;
    this.paths = paths;
    this.shape_slider = shape_slider;
    this.speed = speed;
    this.playing = playing;
    this.drawings = drawings;
    this.selected = selected;
    this.color = color;
  }
}
export const Model$Model = (source, code_open, output, paths, shape_slider, speed, playing, drawings, selected, color) =>
  new Model(source,
  code_open,
  output,
  paths,
  shape_slider,
  speed,
  playing,
  drawings,
  selected,
  color);
export const Model$isModel = (value) => value instanceof Model;
export const Model$Model$source = (value) => value.source;
export const Model$Model$0 = (value) => value.source;
export const Model$Model$code_open = (value) => value.code_open;
export const Model$Model$1 = (value) => value.code_open;
export const Model$Model$output = (value) => value.output;
export const Model$Model$2 = (value) => value.output;
export const Model$Model$paths = (value) => value.paths;
export const Model$Model$3 = (value) => value.paths;
export const Model$Model$shape_slider = (value) => value.shape_slider;
export const Model$Model$4 = (value) => value.shape_slider;
export const Model$Model$speed = (value) => value.speed;
export const Model$Model$5 = (value) => value.speed;
export const Model$Model$playing = (value) => value.playing;
export const Model$Model$6 = (value) => value.playing;
export const Model$Model$drawings = (value) => value.drawings;
export const Model$Model$7 = (value) => value.drawings;
export const Model$Model$selected = (value) => value.selected;
export const Model$Model$8 = (value) => value.selected;
export const Model$Model$color = (value) => value.color;
export const Model$Model$9 = (value) => value.color;

export class SetCode extends $CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
}
export const Msg$SetCode = ($0) => new SetCode($0);
export const Msg$isSetCode = (value) => value instanceof SetCode;
export const Msg$SetCode$0 = (value) => value[0];

export class ToggleCode extends $CustomType {}
export const Msg$ToggleCode$const = new ToggleCode();
export const Msg$ToggleCode = () => Msg$ToggleCode$const;
export const Msg$isToggleCode = (value) => value instanceof ToggleCode;

export class LoadLibrary extends $CustomType {
  constructor($0, $1) {
    super();
    this[0] = $0;
    this[1] = $1;
  }
}
export const Msg$LoadLibrary = ($0, $1) => new LoadLibrary($0, $1);
export const Msg$isLoadLibrary = (value) => value instanceof LoadLibrary;
export const Msg$LoadLibrary$0 = (value) => value[0];
export const Msg$LoadLibrary$1 = (value) => value[1];

export class SetShape extends $CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
}
export const Msg$SetShape = ($0) => new SetShape($0);
export const Msg$isSetShape = (value) => value instanceof SetShape;
export const Msg$SetShape$0 = (value) => value[0];

export class SetSpeed extends $CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
}
export const Msg$SetSpeed = ($0) => new SetSpeed($0);
export const Msg$isSetSpeed = (value) => value instanceof SetSpeed;
export const Msg$SetSpeed$0 = (value) => value[0];

export class TogglePlayback extends $CustomType {}
export const Msg$TogglePlayback$const = new TogglePlayback();
export const Msg$TogglePlayback = () => Msg$TogglePlayback$const;
export const Msg$isTogglePlayback = (value) => value instanceof TogglePlayback;

export class Restart extends $CustomType {}
export const Msg$Restart$const = new Restart();
export const Msg$Restart = () => Msg$Restart$const;
export const Msg$isRestart = (value) => value instanceof Restart;

export class SelectDrawing extends $CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
}
export const Msg$SelectDrawing = ($0) => new SelectDrawing($0);
export const Msg$isSelectDrawing = (value) => value instanceof SelectDrawing;
export const Msg$SelectDrawing$0 = (value) => value[0];

export class NewDrawing extends $CustomType {}
export const Msg$NewDrawing$const = new NewDrawing();
export const Msg$NewDrawing = () => Msg$NewDrawing$const;
export const Msg$isNewDrawing = (value) => value instanceof NewDrawing;

export class CreateDrawing extends $CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
}
export const Msg$CreateDrawing = ($0) => new CreateDrawing($0);
export const Msg$isCreateDrawing = (value) => value instanceof CreateDrawing;
export const Msg$CreateDrawing$0 = (value) => value[0];

export class SetColor extends $CustomType {
  constructor($0) {
    super();
    this[0] = $0;
  }
}
export const Msg$SetColor = ($0) => new SetColor($0);
export const Msg$isSetColor = (value) => value instanceof SetColor;
export const Msg$SetColor$0 = (value) => value[0];

export class ExportPng extends $CustomType {}
export const Msg$ExportPng$const = new ExportPng();
export const Msg$ExportPng = () => Msg$ExportPng$const;
export const Msg$isExportPng = (value) => value instanceof ExportPng;

export class ExportSvg extends $CustomType {}
export const Msg$ExportSvg$const = new ExportSvg();
export const Msg$ExportSvg = () => Msg$ExportSvg$const;
export const Msg$isExportSvg = (value) => value instanceof ExportSvg;

export class DownloadCode extends $CustomType {}
export const Msg$DownloadCode$const = new DownloadCode();
export const Msg$DownloadCode = () => Msg$DownloadCode$const;
export const Msg$isDownloadCode = (value) => value instanceof DownloadCode;

const default_code = "fn draw(shape_slider: Int) -> List(Path) {\n  [Path(Line(Point(-200, 0), Point(200, shape_slider * 3)), 0, 20, 4)]\n}\n";

/**
 * Set these to your public deployment and demonstration video addresses.
 */
export const public_url = "";

export const include_app_in_gallery = false;

export const video_url = "https://drive.google.com/file/d/1Z9eJ5rL_tSNyoAv5kVfK62YRp-URod5g/view?usp=drive_link";

export const include_video_in_gallery = false;

export function init(_) {
  return [
    new Model(
      $data.source($examples.all, "fan", default_code),
      true,
      "",
      $List$Empty$const,
      50,
      1.0,
      true,
      $examples.all,
      "fan",
      "#89ddff",
    ),
    $effect.from(
      (dispatch) => {
        let $ = $data.load();
        let drawings = $[0];
        let selected = $[1];
        return dispatch(new LoadLibrary(drawings, selected));
      },
    ),
  ];
}

function run_source(shape_slider, source) {
  let $ = $parser.parse_program(source, $builtins.global_frame());
  if ($ instanceof Ok) {
    let program = $[0];
    let _pipe = $drawing.try_draw(shape_slider, program);
    return $result.map_error(_pipe, $errors.error_message);
  } else {
    return $;
  }
}

function draw_effect(model, restart) {
  return $effect.from(
    (_) => {
      $render.set_drawing(
        $list.map(
          model.paths,
          (_capture) => { return $render.render_path(_capture, model.color); },
        ),
      );
      if (restart) {
        $render.reset_clock();
      } else {
        undefined;
      }
      return $render.set_speed(
        (() => {
          let $ = model.playing;
          if ($) {
            return model.speed;
          } else {
            return 0.0;
          }
        })(),
      );
    },
  );
}

function save_effect(model) {
  return $effect.from(
    (_) => { return $data.save(model.drawings, model.selected); },
  );
}

function evaluate(model, restart) {
  let $ = run_source(model.shape_slider, model.source);
  if ($ instanceof Ok) {
    let paths = $[0];
    let model$1 = new Model(
      model.source,
      model.code_open,
      "",
      paths,
      model.shape_slider,
      model.speed,
      model.playing,
      model.drawings,
      model.selected,
      model.color,
    );
    return [model$1, draw_effect(model$1, restart)];
  } else {
    let message = $[0];
    return [
      new Model(
        model.source,
        model.code_open,
        message,
        model.paths,
        model.shape_slider,
        model.speed,
        model.playing,
        model.drawings,
        model.selected,
        model.color,
      ),
      $effect.none(),
    ];
  }
}

function select_drawing(model, name) {
  let $ = $list.key_find(model.drawings, name);
  if ($ instanceof Ok) {
    let source = $[0];
    let $1 = evaluate(
      new Model(
        source,
        model.code_open,
        model.output,
        model.paths,
        model.shape_slider,
        model.speed,
        model.playing,
        model.drawings,
        name,
        model.color,
      ),
      true,
    );
    let model$1 = $1[0];
    let draw = $1[1];
    return [
      model$1,
      $effect.batch(
        listPrepend(
          draw,
          listPrepend(
            $editor.mount(source, (var0) => { return new SetCode(var0); }),
            listPrepend(save_effect(model$1), $List$Empty$const),
          ),
        ),
      ),
    ];
  } else {
    return [model, $effect.none()];
  }
}

function unique_name(loop$drawings, loop$base, loop$candidate, loop$suffix) {
  while (true) {
    let drawings = loop$drawings;
    let base = loop$base;
    let candidate = loop$candidate;
    let suffix = loop$suffix;
    let $ = $list.key_find(drawings, candidate);
    if ($ instanceof Ok) {
      loop$drawings = drawings;
      loop$base = base;
      loop$candidate = ((base + " (") + $int.to_string(suffix)) + ")";
      loop$suffix = suffix + 1;
    } else {
      return candidate;
    }
  }
}

function speed_effect(model) {
  return $effect.from(
    (_) => {
      return $render.set_speed(
        (() => {
          let $ = model.playing;
          if ($) {
            return model.speed;
          } else {
            return 0.0;
          }
        })(),
      );
    },
  );
}

export function update(model, msg) {
  if (msg instanceof SetCode) {
    let source = msg[0];
    let model$1 = new Model(
      source,
      model.code_open,
      model.output,
      model.paths,
      model.shape_slider,
      model.speed,
      model.playing,
      $data.update(model.drawings, model.selected, source),
      model.selected,
      model.color,
    );
    let $ = evaluate(model$1, false);
    let model$2 = $[0];
    let draw = $[1];
    return [
      model$2,
      $effect.batch(
        listPrepend(draw, listPrepend(save_effect(model$2), $List$Empty$const)),
      ),
    ];
  } else if (msg instanceof ToggleCode) {
    return [
      new Model(
        model.source,
        !model.code_open,
        model.output,
        model.paths,
        model.shape_slider,
        model.speed,
        model.playing,
        model.drawings,
        model.selected,
        model.color,
      ),
      $effect.none(),
    ];
  } else if (msg instanceof LoadLibrary) {
    let drawings = msg[0];
    let selected = msg[1];
    return select_drawing(
      new Model(
        model.source,
        model.code_open,
        model.output,
        model.paths,
        model.shape_slider,
        model.speed,
        model.playing,
        drawings,
        model.selected,
        model.color,
      ),
      selected,
    );
  } else if (msg instanceof SetShape) {
    let value = msg[0];
    let _block;
    let _pipe = $int.parse(value);
    _block = $result.unwrap(_pipe, model.shape_slider);
    let value$1 = _block;
    return evaluate(
      new Model(
        model.source,
        model.code_open,
        model.output,
        model.paths,
        $int.clamp(value$1, 0, 100),
        model.speed,
        model.playing,
        model.drawings,
        model.selected,
        model.color,
      ),
      false,
    );
  } else if (msg instanceof SetSpeed) {
    let value = msg[0];
    let _block;
    let _pipe = $float.parse(value);
    _block = $result.unwrap(_pipe, model.speed);
    let speed = _block;
    let model$1 = new Model(
      model.source,
      model.code_open,
      model.output,
      model.paths,
      model.shape_slider,
      $float.clamp(speed, -3.0, 3.0),
      model.playing,
      model.drawings,
      model.selected,
      model.color,
    );
    return [model$1, speed_effect(model$1)];
  } else if (msg instanceof TogglePlayback) {
    let model$1 = new Model(
      model.source,
      model.code_open,
      model.output,
      model.paths,
      model.shape_slider,
      model.speed,
      !model.playing,
      model.drawings,
      model.selected,
      model.color,
    );
    return [model$1, speed_effect(model$1)];
  } else if (msg instanceof Restart) {
    return [model, $effect.from((_) => { return $render.reset_clock(); })];
  } else if (msg instanceof SelectDrawing) {
    let name = msg[0];
    return select_drawing(model, name);
  } else if (msg instanceof NewDrawing) {
    return [
      model,
      $effect.from(
        (dispatch) => {
          return dispatch(new CreateDrawing($data.prompt_drawing_name()));
        },
      ),
    ];
  } else if (msg instanceof CreateDrawing) {
    let name = msg[0];
    let name$1 = $string.trim(name);
    let $ = name$1 === "";
    if ($) {
      return [model, $effect.none()];
    } else {
      let name$2 = unique_name(model.drawings, name$1, name$1, 2);
      return select_drawing(
        new Model(
          model.source,
          model.code_open,
          model.output,
          model.paths,
          model.shape_slider,
          model.speed,
          model.playing,
          $list.append(
            model.drawings,
            listPrepend([name$2, default_code], $List$Empty$const),
          ),
          model.selected,
          model.color,
        ),
        name$2,
      );
    }
  } else if (msg instanceof SetColor) {
    let color = msg[0];
    let model$1 = new Model(
      model.source,
      model.code_open,
      model.output,
      model.paths,
      model.shape_slider,
      model.speed,
      model.playing,
      model.drawings,
      model.selected,
      color,
    );
    return [model$1, draw_effect(model$1, false)];
  } else if (msg instanceof ExportPng) {
    return [
      model,
      $effect.from((_) => { return $render.export_png(model.selected); }),
    ];
  } else if (msg instanceof ExportSvg) {
    return [
      model,
      $effect.from((_) => { return $render.export_svg(model.selected); }),
    ];
  } else {
    return [
      model,
      $effect.from(
        (_) => {
          return $data.download_text(
            model.selected + ".gleam",
            model.source,
            "text/plain",
          );
        },
      ),
    ];
  }
}

function button(label, msg, class$) {
  return $html.button(
    listPrepend(
      $attr.type_("button"),
      listPrepend(
        $attr.class$(class$),
        listPrepend($event.on_click(msg), $List$Empty$const),
      ),
    ),
    listPrepend($html.text(label), $List$Empty$const),
  );
}

function slider(label, id, value, min, max, step, on_input) {
  return $html.div(
    listPrepend($attr.class$("slider-control"), $List$Empty$const),
    listPrepend(
      $html.label(
        listPrepend($attr.for$(id), $List$Empty$const),
        listPrepend(
          $html.text(label),
          listPrepend(
            $html.span(
              listPrepend($attr.class$("slider-value"), $List$Empty$const),
              listPrepend($html.text(value), $List$Empty$const),
            ),
            $List$Empty$const,
          ),
        ),
      ),
      listPrepend(
        $html.input(
          listPrepend(
            $attr.id(id),
            listPrepend(
              $attr.attribute("data-test-id", id),
              listPrepend(
                $attr.type_("range"),
                listPrepend(
                  $attr.min(min),
                  listPrepend(
                    $attr.max(max),
                    listPrepend(
                      $attr.step(step),
                      listPrepend(
                        $attr.value(value),
                        listPrepend(
                          $event.on_input(on_input),
                          $List$Empty$const,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        $List$Empty$const,
      ),
    ),
  );
}

function view_controls(model) {
  return $html.footer(
    listPrepend($attr.class$("controls"), $List$Empty$const),
    listPrepend(
      $html.div(
        listPrepend($attr.class$("playback-row"), $List$Empty$const),
        listPrepend(
          button(
            (() => {
              let $ = model.playing;
              if ($) {
                return "Pause";
              } else {
                return "Play";
              }
            })(),
            Msg$TogglePlayback$const,
            "action-btn primary",
          ),
          listPrepend(
            button("Restart", Msg$Restart$const, "action-btn"),
            listPrepend(
              $html.span(
                listPrepend(
                  $attr.class$("drawing-status"),
                  listPrepend(
                    $attr.attribute("role", "status"),
                    $List$Empty$const,
                  ),
                ),
                listPrepend(
                  $html.text(
                    $int.to_string($list.length(model.paths)) + " paths",
                  ),
                  $List$Empty$const,
                ),
              ),
              $List$Empty$const,
            ),
          ),
        ),
      ),
      listPrepend(
        $html.div(
          listPrepend($attr.class$("slider-row"), $List$Empty$const),
          listPrepend(
            slider(
              "Shape",
              "shape-slider",
              $int.to_string(model.shape_slider),
              "0",
              "100",
              "1",
              (var0) => { return new SetShape(var0); },
            ),
            listPrepend(
              slider(
                "Speed",
                "speed-slider",
                $float.to_string(model.speed),
                "-3",
                "3",
                "0.1",
                (var0) => { return new SetSpeed(var0); },
              ),
              $List$Empty$const,
            ),
          ),
        ),
        listPrepend(
          $html.div(
            listPrepend($attr.class$("export-row"), $List$Empty$const),
            listPrepend(
              $html.label(
                listPrepend(
                  $attr.class$("color-control"),
                  listPrepend($attr.for$("ink-color"), $List$Empty$const),
                ),
                listPrepend(
                  $html.text("Ink"),
                  listPrepend(
                    $html.input(
                      listPrepend(
                        $attr.type_("color"),
                        listPrepend(
                          $attr.id("ink-color"),
                          listPrepend(
                            $attr.value(model.color),
                            listPrepend(
                              $event.on_input(
                                (var0) => { return new SetColor(var0); },
                              ),
                              $List$Empty$const,
                            ),
                          ),
                        ),
                      ),
                    ),
                    $List$Empty$const,
                  ),
                ),
              ),
              listPrepend(
                button("Export PNG", Msg$ExportPng$const, "action-btn"),
                listPrepend(
                  button("Export SVG", Msg$ExportSvg$const, "action-btn"),
                  listPrepend(
                    button(
                      "Download code",
                      Msg$DownloadCode$const,
                      "action-btn",
                    ),
                    $List$Empty$const,
                  ),
                ),
              ),
            ),
          ),
          $List$Empty$const,
        ),
      ),
    ),
  );
}

function view_error(model) {
  let $ = model.output;
  if ($ === "") {
    return $element.none();
  } else {
    let message = $;
    return $html.pre(
      listPrepend(
        $attr.class$("error-message"),
        listPrepend($attr.attribute("role", "alert"), $List$Empty$const),
      ),
      listPrepend($html.text(message), $List$Empty$const),
    );
  }
}

function view_header(model) {
  return $html.header(
    listPrepend($attr.class$("studio-header"), $List$Empty$const),
    listPrepend(
      (() => {
        let $ = model.code_open;
        if ($) {
          return $element.none();
        } else {
          return button("Show code", Msg$ToggleCode$const, "icon-btn");
        }
      })(),
      listPrepend(
        $html.div(
          listPrepend($attr.class$("brand"), $List$Empty$const),
          listPrepend(
            $html.h1(
              $List$Empty$const,
              listPrepend($html.text("Animator"), $List$Empty$const),
            ),
            listPrepend(
              $html.span(
                $List$Empty$const,
                listPrepend($html.text("Code. Draw. Play."), $List$Empty$const),
              ),
              $List$Empty$const,
            ),
          ),
        ),
        listPrepend(
          $html.div(
            listPrepend($attr.class$("library-controls"), $List$Empty$const),
            listPrepend(
              $html.label(
                listPrepend(
                  $attr.for$("drawing-select"),
                  listPrepend($attr.class$("sr-only"), $List$Empty$const),
                ),
                listPrepend($html.text("Drawing"), $List$Empty$const),
              ),
              listPrepend(
                $html.select(
                  listPrepend(
                    $attr.id("drawing-select"),
                    listPrepend(
                      $attr.attribute("data-test-id", "drawing-select"),
                      listPrepend(
                        $attr.value(model.selected),
                        listPrepend(
                          $event.on_change(
                            (var0) => { return new SelectDrawing(var0); },
                          ),
                          $List$Empty$const,
                        ),
                      ),
                    ),
                  ),
                  $list.map(
                    model.drawings,
                    (drawing) => {
                      return $html.option(
                        listPrepend(
                          $attr.value(drawing[0]),
                          listPrepend(
                            $attr.selected(drawing[0] === model.selected),
                            $List$Empty$const,
                          ),
                        ),
                        drawing[0],
                      );
                    },
                  ),
                ),
                listPrepend(
                  button("+ New drawing", Msg$NewDrawing$const, "action-btn"),
                  $List$Empty$const,
                ),
              ),
            ),
          ),
          $List$Empty$const,
        ),
      ),
    ),
  );
}

export function view(model) {
  let _block;
  let $ = model.code_open;
  if ($) {
    _block = "app";
  } else {
    _block = "app code-hidden";
  }
  let app_class = _block;
  return $html.div(
    listPrepend($attr.class$(app_class), $List$Empty$const),
    listPrepend(
      $html.div(
        listPrepend($attr.class$("code-col"), $List$Empty$const),
        listPrepend($editor.view_panel(Msg$ToggleCode$const), $List$Empty$const),
      ),
      listPrepend(
        $html.main(
          listPrepend($attr.class$("studio"), $List$Empty$const),
          listPrepend(
            view_header(model),
            listPrepend(
              $html.div(
                listPrepend($attr.class$("canvas-area"), $List$Empty$const),
                listPrepend(
                  $html.canvas(
                    listPrepend(
                      $attr.id("animation-canvas"),
                      listPrepend(
                        $attr.class$("canvas"),
                        listPrepend(
                          $attr.attribute(
                            "aria-label",
                            "Animated drawing preview",
                          ),
                          listPrepend(
                            $attr.attribute("role", "img"),
                            $List$Empty$const,
                          ),
                        ),
                      ),
                    ),
                  ),
                  listPrepend(
                    $html.span(
                      listPrepend(
                        $attr.class$("canvas-caption"),
                        $List$Empty$const,
                      ),
                      listPrepend($html.text("1000 × 1000"), $List$Empty$const),
                    ),
                    $List$Empty$const,
                  ),
                ),
              ),
              listPrepend(
                view_error(model),
                listPrepend(view_controls(model), $List$Empty$const),
              ),
            ),
          ),
        ),
        $List$Empty$const,
      ),
    ),
  );
}

export function main() {
  let app = $lustre.application(init, update, view);
  let $ = $lustre.start(app, "#app", undefined);
  if (!($ instanceof Ok)) {
    throw makeError(
      "let_assert",
      FILEPATH,
      "app",
      408,
      "main",
      "Pattern match failed, no pattern matched the value.",
      {
        value: $,
        start: 10553,
        end: 10602,
        pattern_start: 10564,
        pattern_end: 10569
      }
    )
  }
  return undefined;
}
