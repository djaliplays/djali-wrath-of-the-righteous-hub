### Geomancy

Geomancy deals damage in an area around the caster whenever a spell is cast. It also triggers when placing traps. The ability is granted by the Geomancer, a Sorcerer archetype, at level 1.

!!! class-feature "Geomancy"
    {% include '_includes/geomancy.md' %}

#### What it does for the traps

Placing a trap counts as casting a spell, so Geomancy triggers with every trap placement. With Enduring Spells, up to 144 traps can be placed, allowing Geomancy to trigger up to 144 times. Its damage is 1d6 per spell level; in this case, the relevant spell level is that of the trap, which equals half the character level, up to a maximum of 9. At the maximum, Geomancy deals **9d6** damage.

The effect covers all enemies within 30 feet of the caster, a considerably larger area than the trap's 5-foot burst. Unlike trap damage, Geomancy damage allows no saving throw. This makes it useful against enemies with high Reflex saves or evasion (see [Why DC Matters](#why-dc-matters)). The additional effects, including corruption, blindness, pinning and stun, do allow saving throws.

!!! bug "Save DC"
    The description states that the DC of these saves equals the DC of the spell cast. However, the DC calculation is bugged. For Cave Fangs traps, it is 15 (the base DC of a 5th-level spell) plus any universal DC modifiers currently active.

At mythic rank 10, [Gold Dragon's Perfect Soul](#gd-m10) can Empower and Maximise Geomancy. No other method is currently known to me.

Most damage increases that apply to Geomancy also affect the traps, effectively doubling their value. Examples include:

- [Smites](#smites)
- [Angel](#mythic-angel): additional dice from the sword
- [Azata](#azata-m4): Incredible Might
- [Gold Dragon](#mythic-gd): Dragon Might and Smite

Each cast also deals direct damage to the caster; see [Geomancy Backlash](#geomancy-backlash).

#### Terrain

The effect depends on the terrain occupied by the caster.

| Terrain | Damage | Extra effect | Useful here? |
|---|---|---|---|
| **Abyss** | 1d6 untyped per spell level | Fortitude save or corrupted: -2 on attack rolls, damage rolls and save DCs (a curse) | Best |
| **Desert** | 1d6 slashing per spell level | Reflex save or blinded for 1d4 rounds | Yes, but physical damage |
| **Underground** | 1d6 piercing per spell level | Reflex save or pinned for 1 round | Yes, but physical damage |
| **Urban** | 1d6 bludgeoning per spell level | Fortitude save or stunned for 1 round | Yes, but physical damage |
| **Forest** | None, heals the caster and allies | | Practically no |
| **Highlands** | None, grants DR to the caster and allies | | Practically no |

Desert, Underground and Urban deal physical damage, making physical DR a concern, as with the traps (see [DR and Incorporeal](#dr-and-incorporeal)). Forest and Highlands do not damage enemies, so Geomancy provides no offensive benefit in these terrains.

{% include 'Guides/CaveFangs/_includes/geomancy_terrain_by_act.md'%}

#### Bloodline { #geo-bloodline }

The Geomancer also gains a bloodline at level 1.

**Elemental Bloodline (Fire)** is useful when [Fire Conversion](#elemental-conversion) is part of the build.

??? class-feature "Elemental Bloodline Arcana"
    {% include '_includes/elemental_bloodline_arcana.md' %}

**Arcane Bloodline** is useful when the build does not already include a familiar.

??? class-feature "Arcane Bloodline Arcana"
    {% include '_includes/arcane_bloodline_arcana.md' %}

??? class-feature "Arcane Bond"
    {% include '_includes/arcane_bond.md' %}

The Hare familiar grants +2 Perception and +4 Initiative.

**Undead Bloodline** allows the application of the shaken debuff to undead enemies, reducing their DC by 2.

??? class-feature "Undead Bloodline Arcana"
    {% include '_includes/undead_bloodline_arcana.md' %}

Skeletal Archers in DLC3 and the Undead Dragon in the Act 4 mines have high Reflex saves.
