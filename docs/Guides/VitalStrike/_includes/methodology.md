## Comparing Vital Strike and Full Attacks Methodology
### Damage Categories

For the purposes of comparing Vital Strike and full attacks, damage can be divided into four categories.

=== "Weapon"

    Weapon base damage is the damage provided directly by the weapon's damage dice.

    Characteristics:

    * Comparatively high in the early game.
    * Multiplied by Vital Strike.
    * Multiplied by critical hits.
    * Scales with weapon size increases.
    * Has very limited scaling after the early game.

    Early-game weapons such as greataxes, glaives and heavy crossbows can reach relatively high base damage through size-increasing effects such as *Enlarge Person*, *Lead Blades*, and *Hurricane Bow*. However, opportunities to increase weapon damage dice become rare after the early game, making this one of the weakest scaling damage categories.

    ??? note "Base Weapon Damage"
        === "Melee"
            | Base Damage | Weapon Groups                                                                                                                |
            | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
            | 1d4         | Dagger, Kukri, Light Hammer, Light Pick, Punching Dagger, Sai, Starknife                                                     |
            | 1d6         | Club, Handaxe, Heavy Pick, Kama, Light Mace, Nunchaku, Quarterstaff, Rapier, Scimitar, Shortspear, Shortsword, Sickle, Tongi |
            | 1d8         | Battleaxe, Dueling Sword, Falcata, Flail, Heavy Mace, Longspear, Longsword, Sawtooth Saber, Spear, Trident, Warhammer        |
            | 1d8 / 1d6   | Dwarven Urgrosh, Gnome Hooked Hammer                                                                                         |
            | 1d8 / 1d8   | Orc Double Axe, Two-bladed Sword                                                                                             |
            | 1d10        | Bardiche, Bastard Sword, Dwarven Waraxe, Elven Curve Blade, Fauchard, Glaive, Greatclub, Heavy Flail                         |
            | 1d12        | Greataxe                                                                                                                     |
            | 2d4         | Estoc, Falchion, Scythe                                                                                                      |
            | 2d6         | Earth Breaker, Greatsword                                                                                                    |

        === "Ranged"
            | Base Damage | Weapon Groups                                           |
            | ----------- | ------------------------------------------------------- |
            | 1d4         | Dart                                                    |
            | 1d6         | Javelin, Throwing Axe, Shortbow, Composite Shortbow     |
            | 1d8         | Longbow, Composite Longbow, Light Crossbow, Sling Staff |
            | 1d10        | Heavy Crossbow                                          |
    
    ??? note "Damage Dice Progression"
        | Tiny | Small | Medium | Large | Huge | Gargantuan |
        | ---- | ----- | ------ | ----- | ---- | ---------- |
        | -    | -     | 1      | 1d2   | 1d3  | 1d4        |
        | -    | 1     | 1d2    | 1d3   | 1d4  | 1d6        |
        | 1    | 1d2   | 1d3    | 1d4   | 1d6  | 1d8        |
        | 1d2  | 1d3   | 1d4    | 1d6   | 1d8  | 2d6        |
        | 1d3  | 1d4   | 1d6    | 1d8   | 2d6  | 3d6        |
        | 1d4  | 1d6   | 1d8    | 2d6   | 3d6  | 4d6        |
        | 1d6  | 1d8   | 1d10   | 2d8   | 3d8  | 4d8        |
        | 1d8  | 1d10  | 1d12   | 3d6   | 4d6  | 6d6        |
        | 1d4  | 1d6   | 2d4    | 2d6   | 3d6  | 4d6        |
        | 1d8  | 1d10  | 2d6    | 3d6   | 4d6  | 6d6        |
        | 1d10 | 2d6   | 2d8    | 3d8   | 4d8  | 6d8        |
        | 2d6  | 2d8   | 2d10   | 4d8   | 6d8  | 8d8        |




=== "Flat"

    Flat bonus damage includes ability modifier damage and other fixed damage bonuses.

    Characteristics:

    * Scales with ability modifiers.
    * Receives a 1.5× ability modifier bonus when using two-handed weapons.
    * Comparatively high in the early game with two-handed weapons.
    * Comparatively moderate in the early game with one-handed weapons and composite bows.
    * Comparatively low in the early game with crossbows.
    * Multiplied by critical hits.
    * Scales through many spells, feats, items, class features, and mythic abilities.
    * Maintains strong scaling throughout the game.

    Examples include ability score bonuses, spells such as **Divine Favor** and powerfull class abilties. Because flat bonuses continue to accumulate throughout a playthrough and benefit from critical hits, they generally become the largest source of physical damage in the late game.

    ??? spell "Divine Power"
        {% include '_includes/divine_power.md' %}

    ??? spell "For the King"
        {% include '_includes/ftk.md' %}

=== "Sneak"

    This category includes both Sneak Attack dice and Vital Force dice.

    Characteristics:

    * Requires specific classes or features for early access.
    * Can become relatively high as early as level 4 through multiclassing and *Accomplished Sneak Attacker*.
    * Primarily scales through class levels or caster levels (via *Sense Vitals*).
    * Receives additional scaling from features such as *Accomplished Sneak Attacker*, *Mythic Sneak Attacker*, mythic path abilities, and Inciter support.
    * Not multiplied by critical hits.
    * Provides moderate scaling throughout the game.

    A notable property of Vital Force is that it does not require a successful sneak attack condition to apply. When sneak attack would not trigger, Vital Force still contributes damage.

=== "Extra Dice"

    Extra damage dice are damage sources that are neither weapon damage nor sneak attack damage.

    Characteristics:

    * Almost nonexistent in the early game.
    * Obtained from specific spells, class features, weapon properties, and similar effects.
    * Not multiplied by critical hits.

    Common examples include *Bane* and *Crusader's Edge*. While elemental damage dice also belong to this category, they are often reduced or negated by resistances and immunities, especially in the late game.

### Base assumptions for a naive comparison 

A complete damage comparison between Vital Strike and full attacks depends on many factors, including class, party composition, buffs, enemy statistics, and encounter conditions.

To obtain a simpler comparison, we use the following assumptions:

* Same weapon.
* Same class progression.
* Same buffs and bonuses.
* Only the frequency with which each damage category is applied is considered.

Under these assumptions, damage output can be approximated by counting how many times each damage category is applied per round.

### Application Count Comparison

The simplest comparison assumes that every attack hits. Under this assumption, we can compare Vital Strike and full attacks by counting how many times each damage category is applied.

| Level | Detail                     | Attacks  | Weapon | Flat | Sneak | Extra Dice |
| ----- | -------------------------- | -------- | ------ | ---- | ----- | ---------- |
| 1     | Base Attack                | 0        | 1      | 1    | 1     | 1          |
| 1     | Vital Strike + Vital Force | 0        | 2      | 1    | 3     | 1          |
| 8     | Full Attack (BAB 6)        | 0, -5    | 2      | 2    | 2     | 2          |
| 8     | Full Attack + Haste        | 0, -5, 0 | 3      | 3    | 3     | 3          |

This immediately highlights some of the strengths and weaknesses of Vital Strike.

* Weapon damage benefits directly from the Vital Strike multiplier.
* Sneak Attack is good with Vital Force.
* Flat damage and extra damage dice favour additional attacks. Count

#### Limitations

This methodology has several important limitations:

* Secondary attacks are made at lower BAB values.
* Vital Strike uses only the highest-BAB attack.
* A full attack can score multiple critical hits.
* Vital Strike can score only a single critical hit.
* Vital Strike and critical hit multipliers are additive rather than multiplicative.
* Damage reduction is ignored.
* The value of retaining a move action is ignored.

As a result, attack count alone is insufficient for a realistic comparison.

### Incorporating Hit Chance

A more realistic comparison accounts for accuracy and critical hits.


Assumptions.

* AC − AB = 11.
* Primary attack hit chance = 50%.
* Critical range = 19–20.
* Critical multiplier = ×2.

Critical hits are counted as extra applications based on the multiplier.

The resulting expected application counts are shown below.

| Level | Detail                     | Attacks  | Weapon | Flat | Sneak | Extra Dice |
| ----- | -------------------------- | -------- | ------ | ---- | ----- | ---------- |
| 1     | Base                       | 0        | 0.55   | 0.55 | 0.50  | 0.50       |
| 1     | Vital Strike + Vital Force | 0        | 1.05   | 0.55 | 1.50  | 0.50       |
| 8     | Full Attack (BAB 6)        | 0, -5    | 0.83   | 0.83 | 0.75  | 0.75       |
| 8     | Full Attack + Haste        | 0, -5, 0 | 1.38   | 1.38 | 1.25  | 1.25       |

Vital Strike gains value relative to full attacks because all damage is concentrated into a single attack made at the highest BAB.


### Averaged Results

Rather than selecting a single hit chance, results can be averaged across multiple AC ranges.

Two ranges are useful:

|| Range           | Approximate Hit Chance |
|-----| --------------- | ---------------------- |
|Low AC| AC − AB = 5–16  | 80% to 25%             |
|High AC| AC − AB = 11–20 | 50% to 5%              |

Averaging across a range reduces the impact of any individual scenario and provides a broader view of how full attacks and Vital Strike compare under varying accuracy conditions.

=== "Weapon"

    | Lvl | Detail | Attacks | Count | Low | High |
    |-----|---------|---------|------:|-----:|------:|
    | 1 | Base | 0 | 1 | 0.58 | 0.30 |
    | 1 | Vital Strike | 0 | 2 | 1.10 | 0.58 |
    | 8 | Base | 0, -5 | 2 | 0.88 | 0.41 |
    | 8 | Haste | 0, -5, 0 | 3 | 1.46 | 0.71 |

=== "Flat"

    | Lvl | Detail | Attacks | Count | Low | High |
    |-----|---------|---------|------:|-----:|------:|
    | 1 | Base | 0 | 1 | 0.58 | 0.30 |
    | 1 | Vital Strike| 0 | 1 | 0.58 | 0.30 |
    | 8 | Base | 0, -5 | 2 | 0.88 | 0.41 |
    | 8 | Haste | 0, -5, 0 | 3 | 1.46 | 0.71 |

=== "Sneak"

    | Lvl | Detail | Attacks | Count | Low | High |
    |-----|---------|---------|------:|-----:|------:|
    | 1 | Base | 0 | 1 | 0.53 | 0.28 |
    | 1 | Vital Force | 0 | 3 | 1.57 | 0.82 |
    | 8 | Base | 0, -5 | 2 | 0.80 | 0.38 |
    | 8 | Haste | 0, -5, 0 | 3 | 1.33 | 0.65 |

=== "Extra Dice"

    | Lvl | Detail | Attacks | Count | Low | High |
    |-----|---------|---------|------:|-----:|------:|
    | 1 | Base | 0 | 1 | 0.53 | 0.28 |
    | 1 | Vital Strike | 0| 1 | 0.53 | 0.28 |
    | 8 | Base | 0, -5 | 2 | 0.80 | 0.38 |
    | 8 | Haste | 0, -5, 0 | 3 | 1.33 | 0.65 |

<!--
<table>
<thead>
<tr>
<th rowspan="2">Lvl</th>
<th rowspan="2">Detail</th>
<th rowspan="2">Attacks</th>
<th colspan="3">Weapon</th>
<th colspan="3">Flat</th>
<th colspan="3">Sneak</th>
<th colspan="3">Extra Dice</th>
</tr>
<tr>
<th>Raw</th>
<th>Low</th>
<th>High</th>
<th>Raw</th>
<th>Low</th>
<th>High</th>
<th>Raw</th>
<th>Low</th>
<th>High</th>
<th>Raw</th>
<th>Low</th>
<th>High</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Base</td>
<td>0</td>
<td>1</td><td>0.58</td><td>0.30</td>
<td>1</td><td>0.58</td><td>0.30</td>
<td>1</td><td>0.53</td><td>0.28</td>
<td>1</td><td>0.53</td><td>0.28</td>
</tr>
<tr>
<td>1</td>
<td>VS + VF</td>
<td>0</td>
<td>2</td><td>1.10</td><td>0.58</td>
<td>1</td><td>0.58</td><td>0.30</td>
<td>3</td><td>1.57</td><td>0.82</td>
<td>1</td><td>0.53</td><td>0.28</td>
</tr>
<tr>
<td>8</td>
<td>Base</td>
<td>0, -5</td>
<td>2</td><td>0.88</td><td>0.41</td>
<td>2</td><td>0.88</td><td>0.41</td>
<td>2</td><td>0.80</td><td>0.38</td>
<td>2</td><td>0.80</td><td>0.38</td>
</tr>
<tr>
<td>8</td>
<td>Haste</td>
<td>0, -5, 0</td>
<td>3</td><td>1.46</td><td>0.71</td>
<td>3</td><td>1.46</td><td>0.71</td>
<td>3</td><td>1.33</td><td>0.65</td>
<td>3</td><td>1.33</td><td>0.65</td>
</tr>
</tbody>
</table>

-->

### Relative Comparison

To simplify interpretation, results can be expressed relative to Vital Strike + Vital Force.

In this representation:

* Vital Strike + Vital Force is set to 100%.
* Full attack values are shown as percentages of that baseline.
* Values above 100% indicate a damage category favours full attacks.
* Values below 100% indicate a damage category favours Vital Strike.

<!--
<table>
<thead>
<tr>
<th rowspan="2">Lvl</th>
<th rowspan="2">Detail</th>
<th rowspan="2">Attacks</th>
<th colspan="3">Weapon</th>
<th colspan="3">Flat</th>
<th colspan="3">Sneak</th>
<th colspan="3">Extra Dice</th>
</tr>
<tr>
<th>Raw</th>
<th>Low</th>
<th>High</th>
<th>Raw</th>
<th>Low</th>
<th>High</th>
<th>Raw</th>
<th>Low</th>
<th>High</th>
<th>Raw</th>
<th>Low</th>
<th>High</th>
</tr>
</thead>
<tbody>
<tr class="vs-row">
<td>1</td>
<td>VS + VF</td>
<td>0</td>
<td>100</td><td>100</td><td>100</td>
<td>100</td><td>100</td><td>100</td>
<td>100</td><td>100</td><td>100</td>
<td>100</td><td>100</td><td>100</td>
</tr>
<tr>
<td>1</td>
<td>Base</td>
<td>0</td>
<td>50</td><td>52</td><td>52</td>
<td>100</td><td>100</td><td>100</td>
<td>33</td><td>33</td><td>33</td>
<td>100</td><td>100</td><td>100</td>
</tr>
<tr>
<td>8</td>
<td>Base</td>
<td>0, -5</td>
<td>100</td><td>80</td><td>71</td>
<td>200</td><td>153</td><td>135</td>
<td>67</td><td>51</td><td>45</td>
<td>200</td><td>153</td><td>136</td>
</tr>
<tr>
<td>8</td>
<td>Haste</td>
<td>0, -5, 0</td>
<td>150</td><td>133</td><td>123</td>
<td>300</td><td>253</td><td>235</td>
<td>100</td><td>84</td><td>79</td>
<td>300</td><td>253</td><td>236</td>
</tr>
</tbody>
</table>
-->

=== "Weapon"

    | Lvl | Detail | Attacks | Count | Low | High |
    |-----|---------|---------|------:|-----:|------:|
    | 1 | Vital Strike | 0 | 100 | 100 | 100 |
    | 1 | Base | 0 | 50 | 52 | 52 |
    | 8 | Base | 0, -5 | 100 | 80 | 71 |
    | 8 | Haste | 0, -5, 0 | 150 | 133 | 123 |

=== "Flat"

    | Lvl | Detail | Attacks | Count | Low | High |
    |-----|---------|---------|------:|-----:|------:|
    | 1 | Vital Strike | 0 | 100 | 100 | 100 |
    | 1 | Base | 0 | 100 | 100 | 100 |
    | 8 | Base | 0, -5 | 200 | 153 | 135 |
    | 8 | Haste | 0, -5, 0 | 300 | 253 | 235 |

=== "Sneak"

    | Lvl | Detail | Attacks | Count | Low | High |
    |-----|---------|---------|------:|-----:|------:|
    | 1 | Vital Force | 0 | 100 | 100 | 100 |
    | 1 | Base | 0 | 33 | 33 | 33 |
    | 8 | Base | 0, -5 | 67 | 51 | 45 |
    | 8 | Haste | 0, -5, 0 | 100 | 84 | 79 |

=== "Extra Dice"

    | Lvl | Detail | Attacks | Count | Low | High |
    |-----|---------|---------|------:|-----:|------:|
    | 1 | Vital Strike | 0 | 100 | 100 | 100 |
    | 1 | Base | 0 | 100 | 100 | 100 |
    | 8 | Base | 0, -5 | 200 | 153 | 136 |
    | 8 | Haste | 0, -5, 0 | 300 | 253 | 236 |
