/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eynA5nr5kgHR7rggRgJTMB
// Component: 38HiBb7McIZ-
import * as React from "react";
import {
  PlasmicIcon as PlasmicIcon__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: eynA5nr5kgHR7rggRgJTMB/projectcss
import sty from "./PlasmicRating.module.css"; // plasmic-import: 38HiBb7McIZ-/css
import EmptyStarIcon from "./icons/PlasmicIcon__EmptyStar"; // plasmic-import: MlDj9v5JWGlA/icon
import FullStarIcon from "./icons/PlasmicIcon__FullStar"; // plasmic-import: 48DwzHWf9HWb/icon
import HalfStarIcon from "./icons/PlasmicIcon__HalfStar"; // plasmic-import: ca2CmS_DNX6R/icon

createPlasmicElementProxy;

export const PlasmicRating__VariantProps = new Array("rating");

export const PlasmicRating__ArgProps = new Array();

const $$ = {};

function PlasmicRating__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "rating",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rating
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "half")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "one")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg___19Ec3, {
          [sty.svgrating_five___19Ec3TXuc]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf___19Ec3PonmQ]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four___19Ec3NCr0P]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_half___19Ec3ZCcx9]: hasVariant(
            $state,
            "rating",
            "half"
          ),
          [sty.svgrating_oneHalf___19Ec3Tq60N]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),
          [sty.svgrating_one___19Ec38Et0W]: hasVariant($state, "rating", "one"),
          [sty.svgrating_threeHalf___19Ec338LsQ]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three___19Ec3EEvwx]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf___19Ec3CwxNs]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),
          [sty.svgrating_two___19Ec3UbHc7]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__vIuYe, {
          [sty.svgrating_five__vIuYeTXuc]: hasVariant($state, "rating", "five"),
          [sty.svgrating_fourHalf__vIuYeponmQ]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__vIuYeNCr0P]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_oneHalf__vIuYeTq60N]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),
          [sty.svgrating_threeHalf__vIuYe38LsQ]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__vIuYeEEvwx]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__vIuYeCwxNs]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),
          [sty.svgrating_two__vIuYeubHc7]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__dOdiM, {
          [sty.svgrating_five__dOdiMTXuc]: hasVariant($state, "rating", "five"),
          [sty.svgrating_fourHalf__dOdiMponmQ]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__dOdiMnCr0P]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_threeHalf__dOdiM38LsQ]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__dOdiMeEvwx]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__dOdiMCwxNs]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          )
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__em55, {
          [sty.svgrating_five__em55TXuc]: hasVariant($state, "rating", "five"),
          [sty.svgrating_fourHalf__em55PonmQ]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__em55NCr0P]: hasVariant($state, "rating", "four"),
          [sty.svgrating_threeHalf__em5538LsQ]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          )
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__nhJmr, {
          [sty.svgrating_five__nhJmrTXuc]: hasVariant($state, "rating", "five"),
          [sty.svgrating_fourHalf__nhJmrponmQ]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          )
        })}
        role={"img"}
      />
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRating__ArgProps,
          internalVariantPropNames: PlasmicRating__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRating__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRating";
  } else {
    func.displayName = `PlasmicRating.${nodeName}`;
  }
  return func;
}

export const PlasmicRating = Object.assign(
  // Top-level PlasmicRating renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRating
    internalVariantProps: PlasmicRating__VariantProps,
    internalArgProps: PlasmicRating__ArgProps
  }
);

export default PlasmicRating;
/* prettier-ignore-end */
