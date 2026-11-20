<!--
  Disabled includes are written as an HTML comment: open-angle, bang, two
  dashes, include 'path', two dashes, close-angle. The include plugin only
  reacts to the percent-sign form, and a comment is not rendered on the page.
  To enable one: create the file, then replace the comment opening with
  curly-percent and the comment closing with percent-curly.

  Planned layout of the section files (headings live inside the include files):
    ability.md              ## The Ability
    overview.md             ## Where the Boosts Come From (summary table, written last)
    enduring_spells.md      ## Core Scaling / ### Enduring Spells
    metamagic.md            ### Metamagic
    dc.md                   ### DC
    dr_and_immunity.md      ## Damage Conversion / ### DR and Physical Immunity
    holy_conversion.md      ### Holy Conversion (lists the mythic features; links to their path sections)
    fire_conversion.md      ### Fire Conversion (links to Flame Curse in Your Standard Action)
    elemental_barrage.md    #### Elemental Barrage
    fire_items.md           #### Items that need fire damage
    geomancy.md             ## Synergies / ### Geomancy
    geomancy_backlash.md    #### Geomancy Backlash (self-damage and how to negate it)
    smites.md               ### Smites (also a DR answer and flat damage that survives conversion)
    mythic_*.md             ### one per path (devil.md is a late-game subsection of azata)
    dispel.md ...           ### options for the standard action
    initiative.md ...       ### survivability topics
    build_considerations.md ## Build Considerations
-->

{% include 'Guides/CaveFangs/_includes/intro.md' %}

{% include 'Guides/CaveFangs/_includes/ability.md' %}
{% include 'Guides/CaveFangs/_includes/getting_the_spell.md' %} 
<!-- include 'Guides/CaveFangs/_includes/overview.md' -->

## Core Scaling

{% include 'Guides/CaveFangs/_includes/enduring_spells.md' %} 
{% include 'Guides/CaveFangs/_includes/metamagic.md' %}
{% include 'Guides/CaveFangs/_includes/dc.md' %}

## DR and Incorporeal

{% include 'Guides/CaveFangs/_includes/dr_and_incorporeal.md' %}

## Synergies

{% include 'Guides/CaveFangs/_includes/geomancy.md' %}
{% include 'Guides/CaveFangs/_includes/geomancy_backlash.md' %}
{% include 'Guides/CaveFangs/_includes/smites.md' %}
{% include 'Guides/CaveFangs/_includes/surprise_spells.md' %}


## Damage Conversion

{% include 'Guides/CaveFangs/_includes/holy_conversion.md' %}
{% include 'Guides/CaveFangs/_includes/negative_energy_conversion.md' %}
{% include 'Guides/CaveFangs/_includes/elemental_conversion.md' %}
{% include 'Guides/CaveFangs/_includes/elemental_barrage.md' %}
{% include 'Guides/CaveFangs/_includes/fire_items.md' %}


{% include 'Guides/CaveFangs/_includes/mythic_damage_overview_rev2.md' %}

## Mythic Paths

{% include 'Guides/CaveFangs/_includes/mythic_angel.md' %}
{% include 'Guides/CaveFangs/_includes/mythic_lich.md' %}
{% include 'Guides/CaveFangs/_includes/mythic_gold_dragon.md' %}
{% include 'Guides/CaveFangs/_includes/mythic_demon.md' %}
{% include 'Guides/CaveFangs/_includes/mythic_azata.md' %}

{% include 'Guides/CaveFangs/_includes/mythic_damage_calculations.md' %}


{% include 'Guides/CaveFangs/_includes/mythic_damage_potential.md' %}

## Your Standard Action

{% include 'Guides/CaveFangs/_includes/standard_action.md' %}


## Survivability

{% include 'Guides/CaveFangs/_includes/initiative.md' %}
{% include 'Guides/CaveFangs/_includes/mobility_stealth.md' %}
{% include 'Guides/CaveFangs/_includes/failsafes.md' %}


<!-- include 'Guides/CaveFangs/_includes/build_considerations.md' -->
