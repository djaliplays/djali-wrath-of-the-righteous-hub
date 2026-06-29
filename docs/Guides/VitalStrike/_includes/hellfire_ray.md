## Transition: Hellfire Ray (Various)

Transition from a ranged Vital Strike build.

This transition would be a lot better if Rays Spells still applied sneak on every Ray.

### Hellfire Ray

!!! spell "Hellfire Ray"
    {% include '_includes/hellfire_ray.md' %}

| Crossbow VS | Hellfire Ray |
|---|---|
| Very strong Early Game | Very strong Late Game |
| Uses DEX for attack rolls | Uses DEX for ranged touch attack rolls |
| Benefits from Precise Shot | Benefits from Precise Shot |
| Doesn't use STR for damage | Doesn't use STR for damage |
| Usually used in a 3/4 BAB caster class | Needs to be a caster class |
| Metamagic is a Loremaster prerequisite | Metamagic is used to scale damage |

!!! warning "Cons"
    - Waste a couple of feats on VS. Not a big deal, small cost and don't need too many feats for HFR.
    - HFR has no use for Sneak Attack. Accomplished Sneak Attacker is wasted and picking a Sneak Attack subclass might be suboptimal as you lose other features for it.
    - Lose a CL from Rowdy dip, delays HFR scaling and matters for intensified HFR.
    - Half casters soft cap at 16 CL, can still get to the hard cap of 20 CL through items and spell specialization.

!!! danger "Bigger Cons"
    - Waste a Mythic feat on Mythic Vital Strike. HFR is mythic intensive (Abundant Casting x3, Spell Penetration, Ascendant Element).
    - Weapon specific feats don't transfer (except partially with Eldritch Archer).

### Arcane Trickster

Starting with Sneak Attack also makes it easier to qualify for **Arcane Trickster**. The prestige class requires 2d6 Sneak Attack, which can be obtained, for example, through Rowdy 1 and Accomplished Sneak Attacker.

The main incentive for taking Arcane Trickster is access to the **Ambrosial Attire of Arcane Annihilation**, a very powerful item for ray casters that is available only to an Arcane Trickster main character.

???+ item "Ambrosial Attire of Arcane Annihilation"
    {% include '_includes/ambrosial.md' %}

The usual approach is a single-level dip in Act 3. Alternatively, a three-level dip can be taken earlier to gain an additional 1d6 Sneak Attack at 2nd level and **Impromptu Sneak Attack**, which allows you to target an enemy's flat-footed AC once per day.

??? class-feature "Impromptu Sneak Attack"
    {% include '_includes/impromptu_sneak_attack.md' %}


### Eldritch Archer

The **Eldritch Archer** archetype allows one to combine ranged full attacks with ray casting. Thus retaining benefits from ones investments into archery.
This is a much more natural progression from a conventional archer than from a Vital Strike build. To get the most out of the class you still want the standard archery feat line, such as Rapid Shot, making the build fairly feat-intensive if starting from Vital Strike.

Eldritch Archer combines attacking and casting through two class features:
**Ranged Spellcombat** at level 1 and **Ranged Spellstrike** at level 2.

!!! class-feature "Ranged Spellcombat"
    The eldritch archer can cast a magus spell (with a 1-standard-action casting time) and make all ranged weapon attacks as a full-round action. All ranged attacks take a -2 penalty, and any attack rolls within the spell suffer the same penalty. The eldritch archer cannot accept an attack penalty to gain a bonus on concentration checks to cast a spell defensively.

    **Note:** Standard action, this means this won't work with a Spellbook Metamagicked Spell from a Spontaneous Caster.

!!! class-feature "Ranged Spellstrike"
    At 2nd level, the eldritch archer can cast a magus spell requiring a ranged attack and deliver it through a ranged weapon as part of a single attack at her highest base attack bonus. This attack deals normal weapon damage plus the spell's effects, using the weapon's critical range but applying ×2 damage for the spell effect on a critical hit. When used with Ranged Spell Combat, this attack takes any penalties from it. The attack doesn't extend the spell's range.

This does change several aspects of Hellfire Ray:

**Targets regular AC:** Hellfire Ray requires a ranged touch attack, but Hellfire Ray delivered through spellstrike uses the weapon's attack roll and thus requires a regular ranged attack.

**Higher Crit Range:** Hellfire Ray has a 20 crit range, 19-20 with Improved Critical. Can be increased to 17-20 with the two Trickster Feats. Hellfire Ray delivered through a crossbow has a 19-20 crit range, 17-20 with Improved Critical. Can be increased to 14-20 with the two Trickster Feats and Flawless Belt of Physical Perfection +8.

**Lower Crit Multiplier:** Hellfire Ray has a 2x crit multiplier, but it can potentially be scaled to:

$$2\ (\text{base}) + 1\ (\text{Mythic Improved Critical}) + 1\ (\text{Improved Improved Improved Critical Improved}) = 4\times$$

One item with particularly good synergy for a sneak attack Eldritch Archer is Treacherous Flame. The projectile from the bow or crossbow applies the fire vulnerability before the Hellfire Rays hit, increasing their damage.

In testing this interaction was not completely consistent. Occasionally the first ray landed before the weapon projectile, meaning only the second and third rays benefited from the vulnerability.

??? item "Treacherous Flame"
    {% include '_includes/treacherous_flame.md' %}

### Demon

Demon offers several benefits to a Hellfire Ray caster.

**Aspect of Brimorak** increases the damage of spells by adding bonus damage per damage die rolled, making it particularly effective with Hellfire Ray.

??? demon-feature "Aspect of the Brimorak"
    {% include '_includes/aspect_brimorak.md' %}

**Aspect of Coloxus** allows you to cast two Hellfire Rays in a single round by enabling spellcasting as a move action.

??? demon-feature "Aspect of the Coloxus"
    {% include '_includes/aspect_coloxus.md' %}

### Trickster

Trickster offers a relatively inexpensive but very late transition from a martial character into a ray caster.

Its combination of **Reuse Magic Device** and the **Rod of Magical Affinity** allows rays to be fully metamagicked without investing in metamagic feats or additional rods, leaving the latter available for other party members.

??? trickster-feature "Reuse Magic Device"
    {% include '_includes/umd_2.md' %}

??? item "Rod of Magical Affinity"
    {% include '_includes/rod_of_magical_affinity.md' %}

There are, however, some limitations. The Rod of Magical Affinity is only available in Act 4. To make immediate use of it, Reuse Magic Device must already have been selected at Mythic Rank 4 in Act 3. This is a highly contested choice, competing with options such as Knowledge (Arcana) II and Perception II. Delaying it until Mythic Rank 6 is also possible, although that leaves only the final dungeon of Act 4 + Act 5 to benefit from it.

Thanks to his sneak attack a Trickster can also qualify for [Arcane Trickster](#arcane-trickster) at Mythic Rank 3; in time to get the robe.

??? trickster-feature "Sneak Attack"
    {% include '_includes/trickster_sneak.md' %}

**Use Magic Device III** grants a Wizard spellbook. This allows a previously non-casting martial character to become a competent arcane caster. However, Greater Mythic Tricks are not available until Mythic Rank 7, leaving only the final act of the game to make use of the spellbook.

??? trickster-feature "Use Magic Device III"
    {% include '_includes/umd_3.md' %}
    
Trickster can also achieve the highest possible **Hellfire Ray** critical multiplier. **Improved Improved Improved Critical Improved** raises the multiplier to 4×, and can be obtained through either Perception II or Knowledge (World) III.

??? feat "Improved Improved Improved Critical Improved"
    {% include '_includes/iii_critical_i.md' %}

**Trick Fate** guarantees a natural 20, ensuring a critical hit (given no immunities and auto confirm). However it becomes available at Mythic Rank 9, when relatively little of the game remains.

??? spell "Trick Fate"
    {% include '_includes/trick_fate.md' %}
