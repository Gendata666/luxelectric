/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eynA5nr5kgHR7rggRgJTMB
// Component: Z1zET6kBfLJn

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import TextField from "../../TextField"; // plasmic-import: 4BrSWjkClzUc/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: eynA5nr5kgHR7rggRgJTMB/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: Z1zET6kBfLJn/css

import HomeIcon from "./icons/PlasmicIcon__Home"; // plasmic-import: CHYQOq1_CdQH/icon
import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: nPQ8rLjQJ0Jb/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: 5thWNmiUiYRe/icon
import ProfileIcon from "./icons/PlasmicIcon__Profile"; // plasmic-import: QwbovN1HS2rw/icon
import CartIcon from "./icons/PlasmicIcon__Cart"; // plasmic-import: wXv8M2hyWX8W/icon

createPlasmicElementProxy;

export type PlasmicNavBar__VariantMembers = {
  searchOpen: "searchOpen";
};
export type PlasmicNavBar__VariantsArgs = {
  searchOpen?: SingleBooleanChoiceArg<"searchOpen">;
};
type VariantPropType = keyof PlasmicNavBar__VariantsArgs;
export const PlasmicNavBar__VariantProps = new Array<VariantPropType>(
  "searchOpen"
);

export type PlasmicNavBar__ArgsType = {};
type ArgPropType = keyof PlasmicNavBar__ArgsType;
export const PlasmicNavBar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavBar__OverridesType = {
  root?: Flex__<"section">;
  text?: Flex__<"div">;
  textField?: Flex__<typeof TextField>;
};

export interface DefaultNavBarProps {
  searchOpen?: SingleBooleanChoiceArg<"searchOpen">;
  className?: string;
}

const $$ = {};

function PlasmicNavBar__RenderFunc(props: {
  variants: PlasmicNavBar__VariantsArgs;
  args: PlasmicNavBar__ArgsType;
  overrides: PlasmicNavBar__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "searchOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.searchOpen
      },
      {
        path: "textField.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootsearchOpen]: hasVariant($state, "searchOpen", "searchOpen") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__gGbg, {
          [sty.freeBoxsearchOpen__gGbGpFfr4]: hasVariant(
            $state,
            "searchOpen",
            "searchOpen"
          )
        })}
      >
        <Stack__
          as={PlasmicLink__}
          hasGap={true}
          className={classNames(projectcss.all, projectcss.a, sty.link__r8Ug, {
            [sty.linksearchOpen__r8UgpFfr4]: hasVariant(
              $state,
              "searchOpen",
              "searchOpen"
            )
          })}
          href={`/`}
          platform={"react"}
        >
          <HomeIcon
            className={classNames(projectcss.all, sty.svg__iWaFz)}
            role={"img"}
          />

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              {
                [sty.textsearchOpen]: hasVariant(
                  $state,
                  "searchOpen",
                  "searchOpen"
                )
              }
            )}
          >
            {"Home"}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zgnNk, {
            [sty.freeBoxsearchOpen__zgnNkpFfr4]: hasVariant(
              $state,
              "searchOpen",
              "searchOpen"
            )
          })}
        >
          <TextField
            data-plasmic-name={"textField"}
            data-plasmic-override={overrides.textField}
            className={classNames("__wab_instance", sty.textField, {
              [sty.textFieldsearchOpen]: hasVariant(
                $state,
                "searchOpen",
                "searchOpen"
              )
            })}
            onChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["textField", "value"]).apply(
                null,
                eventArgs
              );

              if (
                eventArgs.length > 1 &&
                eventArgs[1] &&
                eventArgs[1]._plasmic_state_init_
              ) {
                return;
              }
            }}
            placeholder={"Search..."}
            showLabel={false}
          />

          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___8FWxn
            )}
            onClick={async event => {
              const $steps = {};

              $steps["updateSearchOpen"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["searchOpen"]
                      },
                      operation: 0,
                      value: !$state.searchOpen
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateSearchOpen"] != null &&
                typeof $steps["updateSearchOpen"] === "object" &&
                typeof $steps["updateSearchOpen"].then === "function"
              ) {
                $steps["updateSearchOpen"] = await $steps["updateSearchOpen"];
              }
            }}
            platform={"react"}
          >
            <SearchIcon
              className={classNames(projectcss.all, sty.svg__kgBv7)}
              role={"img"}
            />
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__qeN2V
            )}
            href={"#"}
            platform={"react"}
          >
            <ProfileIcon
              className={classNames(projectcss.all, sty.svg__eMz)}
              role={"img"}
            />
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__nx59B
            )}
            href={"#"}
            platform={"react"}
          >
            <CartIcon
              className={classNames(projectcss.all, sty.svg__k2DSu)}
              role={"img"}
            />
          </PlasmicLink__>
        </Stack__>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "textField"],
  text: ["text"],
  textField: ["textField"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "section";
  text: "div";
  textField: typeof TextField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavBar__VariantsArgs;
    args?: PlasmicNavBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavBar__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavBar__ArgProps,
          internalVariantPropNames: PlasmicNavBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    textField: makeNodeComponent("textField"),

    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */
