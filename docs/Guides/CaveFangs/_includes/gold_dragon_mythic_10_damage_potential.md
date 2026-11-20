#### Mythic Rank 10 damage potential

The following calculations estimate the damage from a single **Cave Fangs** cast, assuming all 144 traps are cast upon (an infinite hp) target.

Maximised damage is rounded down by the game for each trap. Average damage retains fractional values until the total is calculated.

##### Single-target damage

**Assumptions**

- Dragon Might
- Dragon Smite, with 80 Charisma
- 15d6 sneak attack damage from Surprise Spells
- An allied Paladin's Mark of Justice, adding 20 damage
- Fire conversion 
- Flame Curse, applied by an ally
- Call of the Fiery Things

**Sneak attack dice**

| Source | Sneak attack |
|---|---:|
| 1 level of Vivisectionist | 1d6 |
| Sense Vitals (character level 15+) | 5d6 |
| Arcane Trickster | 5d6 |
| Accomplished Sneak Attacker | 1d6 |
| 1 level of Rogue | 1d6 |
| 3 levels of Assassin | 2d6 |
| **Total** | **15d6** |

With Perfect Soul, the sneak attack dice become d10s. Surprise Spells' additional sneak attack damage is not Empowered or Maximised; it is multiplied only by Dragon Might.

**Charisma calculation**

| Source | Charisma |
|---|---:|
| Base | 17 |
| Racial: Kindred-Raised Half-Elf | +4 |
| Ability increases | +5 |
| Inherent: Tome of Ancient Perfection | +4 |
| Enhancement: Many | +8 |
| Circumstance: Grand Festival Cloak | +2 |
| Morale: Court Poet and Ring of Triumphant Advance | +12 |
| Alchemical: Cognatogen | +8 |
| Profane: Ascension | +6 |
| Conflagrant Taco | +4 |
| Perfect Soul | +8 |
| Vellexia's Magnifying Amulet | +2 |
| **Total Charisma** | **80** |

The resulting Charisma modifier is:

\[
\frac{80 - 10}{2} = 35
\]

Dragon Smite adds half the Charisma modifier to damage, rounded down:

\[
\left\lfloor \frac{35}{2} \right\rfloor = 17
\]

**Trap damage**

Trap damage benefits from Dragon Might, Flame Curse, and the Maximise + Empower effect from Perfect Soul. The maximised damage is rounded down per trap:

\[
\left\lfloor
(3 \times 10 + 6_{\text{Bolster}} + 17_{\text{Dragon Smite}} + 20_{\text{Mark of Justice}})
\times 1.5^3
\right\rfloor
= 246
\]

**Sneak attack damage**

The sneak attack damage from Surprise Spells is multiplied only by Dragon Might. Its average damage is:

\[
15 \times \frac{10 + 1}{2} \times 1.5
= 123.75
\]

**Geomancy damage**

Geomancy benefits from Dragon Smite, Mark of Justice, Dragon Might, and the Maximise + Empower effect. The maximised damage is rounded down per trap:

\[
\left\lfloor
(9 \times 6 + 17_{\text{Dragon Smite}} + 20_{\text{Mark of Justice}})
\times 1.5^2
\right\rfloor
= 204
\]

**Call of the Fiery Things**

Benefits from the Maximise + Empower effect.

\[
4 \times 6 \times 1.5
= 36 
\]


**Total single-target damage**

Combining the rounded trap and Geomancy damage with the average sneak attack damage gives:

\[
(246 + 123.75 + 204 + 36) \times 144
= \boxed{87\,804}
\]

##### Geomancy AoE

**Assumptions**

- Dragon Might
- Dragon Smite, with 80 Charisma

Geomancy benefits from Dragon Smite, Dragon Might, and the Empower effect. The maximised damage is rounded down per trap:

\[
\left\lfloor
(9 \times 6 + 17_{\text{Dragon Smite}})
\times 1.5^2
\right\rfloor
= 159
\]

Across 144 traps:

\[
159 \times 144
= \boxed{22\,896}
\]

A single Cave Fangs cast could therefore theoretically deal **87,804 damage to one target**, of which **22,896 damage** is dealt as 30-foot-radius AoE damage through Geomancy.

Elemental Barrage could increase the total further; this is left as an excerice to the reader.
