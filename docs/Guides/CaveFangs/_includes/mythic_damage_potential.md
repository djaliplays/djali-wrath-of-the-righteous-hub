### Maximum damage potential

The following examples apply the formulae and variables defined in the preceding mythic damage calculations. Both assume that all 144 trap placements from one Cave Fangs buff hit the same target.

#### Mythic Rank 6: Angel damage potential

This estimate uses the MR6 Angel high-damage setup: *Sword of Heaven* with *The Bound of Possibility*, *Plague of Madness*, *Promise of Greatness* and *Abolish Guile*. The target is a Guile Demon affected by Fire conversion and *Flame Curse*.

The flat damage is `FD = 40`: +20 from a Hellknight 10 main character and +20 from a level-20 allied Paladin's *Mark of Justice*.

**Trap damage**

The [MR6 Angel formula](#angel-m6-trap), with *Flame Curse* applied as an additional multiplier, gives:

\[
T = \left\lfloor 1.5 \times 1.5(93 + 1.5 \times 40) \right\rfloor = 344
\]

Maximised damage is rounded down for each trap.

**Geomancy damage**

Using the MR6 formula `G = 1.5(13d6 + FD)` and average die results:

\[
G_{\text{avg}} = 1.5(13 \times 3.5 + 40) = 128.25
\]

*Flame Curse* does not multiply Geomancy damage due to it remaining holy.

**Total across 144 traps**

\[
(344 + 128.25) \times 144 = \boxed{68\,004 \text{ average damage}}
\]

This total combines maximised trap damage with average Geomancy damage. 

Wether Elemental Barrage would raise or hurt this total is left as an exercise to the reader.


#### Mythic Rank 10: Gold Dragon damage potential

This estimate uses the MR10 Gold Dragon high-damage setup, with *Perfect Soul*, *Promise of Greatness* and *Dragon Might*. The target is affected by Fire conversion and *Flame Curse*; an allied Paladin provides *Mark of Justice*.

##### Single Target { #gd-single }

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

**Final variables**

The formula variables are `FD = 20` (*Mark of Justice*), `DS = 17` (*Dragon Smite* at 80 Charisma), `SD = 15`, and `G = 9` at character level 20. *Perfect Soul* changes the damage dice to d10s and automatically applies Empower and Maximise.

**Trap damage**

The MR10 Gold Dragon formula (disregarding bolster due to counting sneak), with the additional *Flame Curse* multiplier, gives:

\[
T = \left\lfloor 1.5 \times (3 \times 10 + 20 + 17) \times 1.5^2 \right\rfloor = 226
\]

**Surprise Spells**

*Perfect Soul* changes the sneak-attack dice to d10s. This damage is not Empowered or Maximised; only *Dragon Might* multiplies it. Using average die results:

\[
SS_{\text{avg}} = 1.5 \times 15 \times 5.5 = 123.75
\]

**Geomancy damage**

Using the MR10 formula with `G = 9`.

\[
G = \left\lfloor (9 \times 6 + 20 + 17) \times 1.5^2 \right\rfloor = 204
\]

**Call of the Fiery Things**

\[
C = 4 \times 6 \times 1.5 = 36
\]

**Total single-target damage across 144 traps**
{: #gd-max-dmg }


\[
(226 + 123.75 + 204 + 36) \times 144
= \boxed{84\,924}
\]

##### Geomancy AoE damage { #gd-geo-aoe }

Geomancy (on other targets) benefits from Dragon Smite, Dragon Might, and the Empower effect. The maximised damage is rounded down per trap:

\[
\left\lfloor
(9 \times 6 + 17_{\text{Dragon Smite}})
\times 1.5^2
\right\rfloor
= 159
\]

\[
159 \times 144
= \boxed{22\,896}
\]

The AoE figure is part of, not additional to, the single-target total.
