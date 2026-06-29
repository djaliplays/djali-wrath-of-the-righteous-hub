### Demon Shadow Shaman Evercold

!!! abstract "Build Overview"
    **Classes:** Rowdy 1, Vivisectionist 1, Shadow Shaman 15, Loremaster 3

    **Loremaster Secrets:** Combat Feat: Greater Vital Strike, Wizard Spell: Sense Vitals

An example of a Vital Force Evercold build.

Shadow Shaman has inherent sneak attack progression, qualifies for Loremaster with minimal investment by spending its (not as useful) initial Hex, and can easily obtain both Greater Vital Strike (via the 1st Loremaster Secret) and Sense Vitals (via the 3rd Loremaster Secret). The latter further increases Vital Force damage by adding additional sneak attack dice.

This build was exceptionally strong before the Coloxus and Evercold changes. While no longer among the strongest endgame options, it remains a reasonably effective Vital Strike build.

??? item-weapon "Evercold"
    {% include '_includes/evercold.md' %}


??? spell "Sense Vitals "
    {% include '_includes/sense_vitals.md' %}

#### Precision Damage

**Total Sneak Attack:**

$$
\begin{aligned}
&1d6\ (\text{Rowdy}) + 1d6\ (\text{Vivisectionist}) + 5d6\ (\text{Shadow Shaman}) \\
&+\ 5d6\ (\text{Sense Vitals}) + 1d6\ (\text{Accomplished Sneak Attacker}) \\
&+\ 4d6\ (\text{Aspect of Babau}) + 1d6\ (\text{Mythic Sneak Attacker}) = 18d6
\end{aligned}
$$

**Evercold Precision Damage:**

$$
\begin{aligned}
&18d6\ (\text{Sneak}) + 2 \times 18d6\ (\text{Vital Force}) = 54d6 \\
&54d6 \times 2\ (\text{two bolts}) = 108d6
\end{aligned}
$$

<figure markdown="span">
  ![Simulated damage distribution for 108d6 sneak attack damage](png/dice_sim_108sneak.png)
  <figcaption markdown="span">Simulated damage distribution for $108d6$ sneak attack damage. $378$ median and average. $90$ percentile range is $[349, 407]$.</figcaption>
</figure>

#### Other Damage Sources (Self)

**Weapon:** $1d10$ (Heavy Crossbow, medium) $\rightarrow$ $3d8$ (Legendary Proportions, +2 Size, Huge) $\rightarrow$ $4d8$ (Hurricane Bow, +1 Size, Gargantuan)

**Flat AD:** $4$ (Demon Rage) $+\ 6$ (Luck, Divine Power) $+\ 7$ (Enchantment, GMW + Bane) $+\ 2$ (Weapon Specialization) $+\ 5$ (Weapon Specialization Mythic) $+\ 12$ (Deadly Aim Mythic) $+\ 1$ (Point-Blank Shot) $+\ 3$ (Demon Slayer Soup) $=\ 40$

**VS Evercold Main:**

$$(4d8\ (\text{Weapon}) + 40\ (\text{Flat}) + 10\ (\text{Sure Footing})) \times 4 + 54d6\ (\text{Sneak, Vital Force}) + 2d6\ (\text{Bane}) = 16d8 + 200 + 56d6$$

**VS Evercold Main Crit (3x):**

$$(4d8\ (\text{Weapon}) + 40\ (\text{Flat}) + 10\ (\text{Sure Footing})) \times 7 + 54d6\ (\text{Sneak, Vital Force}) + 2d6\ (\text{Bane}) = 28d8 + 350 + 56d6$$

**VS Evercold Bolt:**

$$4d8\ (\text{Weapon}) + 40\ (\text{Flat}) + 54d6\ (\text{Sneak, Vital Force}) + 2d6\ (\text{Bane}) = 4d8 + 40 + 56d6$$

**VS Pre-Nerf Evercold Bolt:**

$$(4d8\ (\text{Weapon}) + 40\ (\text{Flat})) \times 4 + 54d6\ (\text{Sneak}) + 2d6\ (\text{Bane}) = 16d8 + 160 + 56d6$$

**VS Evercold Cold Proc:**

$$2d6\ (\text{Evercold, converted to unholy}) + 2d6\ (\text{Bane}) = 4d6$$

#### Pre-Nerf Coloxus Pre-Nerf Evercold

**VS Evercold Total (2x):**

$$(16d8 + 200 + 56d6 + 16d8 + 160 + 56d6 + 4d6) \times 2 = 64d8 + 720 + 232d6$$

<figure markdown="span">
  ![Simulated damage distribution for 64d8 + 720 + 232d6 damage, zoomed in](png/dice_sim_old_demon_zoom.png)
  <figcaption markdown="span">Simulated damage distribution for $64d8 + 720 + 232d6$ damage. Zoomed in (full range is $[1016, 2624]$). $1820$ median and average. $90$ percentile range is $[1768, 1872]$.</figcaption>
</figure>

#### Current Evercold

**VS Evercold Total:**

$$16d8 + 200 + 56d6 + 4d8 + 40 + 56d6 + 4d6 = 20d8 + 240 + 116d6$$

<figure markdown="span">
  ![Simulated damage distribution for 20d8 + 240 + 116d6 damage](png/dice_sim_new_demon.png)
  <figcaption markdown="span">Simulated damage distribution for $20d8 + 240 + 116d6$ damage. $736$ median and average. $90$ percentile range is $[701, 771]$.</figcaption>
</figure>
