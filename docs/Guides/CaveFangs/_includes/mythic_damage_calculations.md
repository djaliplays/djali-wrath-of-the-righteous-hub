## Mythic damage calculations

### Calculations

These calculations compare the damage and DC contributions of the mythic paths to Cave Fangs: Stalactites. The overview table is in the [mythic damage overview](#mythic-damage-overview).

#### Variables and conventions

| Abbreviation | Meaning |
|---|---|
| `SD` | Total character sneak-attack dice, including *Sense Vitals*. |
| `FD` | Other flat damage added to the hit, such as the character's Smite or an allied Paladin's *Mark of Justice*. |
| `DS` | Flat damage from Gold Dragon's *Dragon Smite*, equal to half the Gold Dragon's Charisma modifier. |
| `ChL` | Character level. For Mythic Rank 6 and above, the calculations assume character level 20. |
| `G` | Geomancy dice: `min(9, floor(ChL / 2))`. At character level 20, `G = 9`. |
| `PoM` | *Plague of Madness*, which Empowers and Maximises the Cave Fangs buff. |
| `PoG` | *Promise of Greatness*, which Bolsters the Cave Fangs buff. |

Surprise Spells is shown as a dice expression because the number of sneak-attack dice depends on the character build. 

Flat damage is similarly left symbolic because it depends on the character and allied build.

A successful Reflex save normally halves Trap and Surprise Spells damage. *Favorable Magic* changes this to a 25% reduction, so 75% of the damage remains. Evasion still negates damage on a successful Reflex save. 

Energy conversion and physical damage bypass are separate flags, since Demon has a way to achieve the latter without the former. 

Conversion to Energy also enables further conversion to an [Element](#elemental-conversion). This allows the character to benefit from:

- Flame Curse: another 1.5x multiplier on trap damage
- Call of the Fiery Things: 4d6 damage on each trap cast (36 for Gold Dragon)
- Elemental Barrage: Mythic Level x d6 damage when procced

These have not been included in the damage table.

??? hex "Flame Curse"
    {% include '_includes/flame_curse.md' %}

??? item "Call of the Fiery Things"
    {% include '_includes/call_of_the_fiery_things.md' %}

??? mythic-feature "Elemental Barrage"
    {% include '_includes/elemental_barrage.md' %}

#### Geomancy and self-damage

Geomancy deals `1d8` direct damage to the geomancer. The overview greys out Geomancy where the character has no way to absorb or avoid that damage. From Mythic Rank 6 onwards, the assumption is that *Gloves of Enduring Wizard* absorb the backlash. 

#### No mythic path

The unmodified damage expressions are:

- Trap: `3d8 + FD`
- Surprise Spells: `SDd6`
- Geomancy: `Gd6 + FD`

With *Plague of Madness*, the maximum Trap damage is:

\[
(3 \times 8) \times 1.5 + 1.5FD = 36 + 1.5FD
\]

Adding *Promise of Greatness* gives:

\[
(3 \times 8 + 6) \times 1.5 + 1.5FD = 45 + 1.5FD
\]

Neither item changes the Surprise Spells or Geomancy expressions in this calculation.

??? item-weapon "Plague of Madness"
    {% include '_includes/plague_of_madness.md' %}

??? item "Promise of Greatness"
    {% include '_includes/promise_of_greatness.md' %}

??? class-feature "Surprise Spells"
    {% include '_includes/surprise_spells.md' %}

??? class-feature "Geomancy"
    {% include '_includes/geomancy.md' %}

??? item "Gloves of Enduring Wizard"
    {% include '_includes/gloves_of_enduring_wizard.md' %}

### Mythic Rank 3

#### Angel

The low and medium tiers use the same damage setups as the no-mythic baseline. The high tier adds *Sword of Heaven*, which grants two additional damage dice to spells and abilities used while the Angel holds an imbued weapon. This does not affect the Bolster from *Promise of Greatness*.

**Low**

\[
T = 3 \times 8 \times 1.5 + 1.5FD = 36 + 1.5FD
\]

**Medium**

\[
T = (3 \times 8 + 6) \times 1.5 + 1.5FD = 45 + 1.5FD
\]

**High, with Sword of Heaven**

\[
T = ((3 + 2) \times 8 + 6) \times 1.5 + 1.5FD = 69 + 1.5FD
\]

\[
G = (G + 2)d6 + FD
\]

 Sword of Heaven has limited daily uses, which places this setup in the High tier.

??? angel-feature "Sword of Heaven"
    {% include '_includes/sword_of_heaven.md' %}

#### Lich

*Death of Elements* converts elemental damage to Negative Energy. This also allows use of Geomancy without self-damage at this rank trough Death Ward. See [Negative Energy Conversion](#negative-energy-conversion).

**Low**

\[
T = 36 + 1.5FD
\]

**Medium**

\[
T = 45 + 1.5FD
\]

For both tiers:

\[
SS = SDd6, \qquad G = Gd6 + FD
\]

??? lich-feature "Death of Elements"
    {% include '_includes/lich_death_of_elements.md' %}

#### Demon

Demonic Rage increases spell and ability DC by `+2`. We seperate a `+2` medium setup from a `+4` high setup, where the buff's inherited DC and the trap's direct DC bonus both apply.

**Low:** `T = 36 + 1.5FD`.

**Medium:** `T = 45 + 1.5FD`; Demonic Rage contributes `+2 DC`.

**High:** `T = 45 + 1.5FD`; the double application contributes `+4 DC`.

For all three tiers, `SS = SDd6`. Geomancy is greyed out because the Demon has way to absorb its self-damage at this stage.

??? demon-feature "Demonic Rage"
    {% include '_includes/demonic_rage.md' %}

#### Azata

At this rank, there are no damage or DC feature that improves Cave Fangs. The low and medium tiers therefore match the no-mythic baseline:

- Low: `T = 36 + 1.5FD`.
- Medium: `T = 45 + 1.5FD`.
- Both: `SS = SDd6`; `G = Gd6 + FD` (greyed out due to Geomancy's self-damage).

### Mythic Rank 6

All paths are treated as able to use Geomancy without backlash through *Gloves of Enduring Wizard*. 

#### Angel

The medium setup combines *Sword of Heaven*, *Everlasting Flame*, *Sword of Holy Damage* and *The Bound of Possibility*. The cloak increases Sword of Heaven's damage bonus from two dice to four; *Everlasting Flame* extends its duration to one minute per Mythic Rank. *Sword of Holy Damage* converts the Angel's damage to Holy.

**Low**

\[
T = 36 + 1.5FD, \qquad G = 9d6 + FD
\]

**Medium**
{: #angel-m6-trap }

\[
T = ((3 + 4) \times 8 + 6) \times 1.5 + 1.5FD = 93 + 1.5FD
\]

\[
G = (9 + 4)d6 + FD = 13d6 + FD
\]

For DC Piercing Rays add +2 DC at this stage.

Against eligible targets, *Abolish Guile* adds a further 1.5× damage multiplier:

\[
T = 1.5(93 + 1.5FD) = 139.5 + 2.25FD
\]

\[
SS = 1.5 \times SDd6, \qquad G = 1.5(13d6 + FD)
\]

This is target-dependent, not a general increase against every enemy. The Angel selects the relevant Abolish upgrade for the target category; these are alternatives, not simultaneous bonuses.

??? angel-feature "Sword of Heaven"
    {% include '_includes/sword_of_heaven.md' %}

??? angel-feature "Everlasting Flame"
    {% include '_includes/everlasting_flame.md' %}

??? angel-feature "Sword of Holy Damage"
    {% include '_includes/sword_of_holy_damage.md' %}

??? item "The Bound of Possibility"
    {% include '_includes/the_bound_of_possibility.md' %}

??? angel-feature "Abolish Guile"
    {% include '_includes/abolish_guile.md' %}

??? angel-feature "Piercing Rays"
    {% include '_includes/piercing_rays.md' %}

#### Lich

*Fear Control* adds flat damage equal to Mythic Rank against targets affected by fear or mind-affecting effects. At Mythic Rank 6 this is `+6` damage.

**Low**

\[
T = (3 \times 8 + 6) \times 1.5 + 1.5FD = 45 + 1.5FD
\]

**Medium**

\[
T = (3 \times 8 + 6 + 6) \times 1.5 + 1.5FD = 54 + 1.5FD
\]

For both tiers:

\[
SS = SDd6, \qquad G = 9d6 + FD
\]

??? lich-feature "Fear Control"
    {% include '_includes/lich_fear_control.md' %}

#### Demon

At Mythic Rank 6, Demonic Rage and the Incubus Aspect improve. The major Aspect (Shadow Demon or Coloxus) supplies the casting-stat increase used in the buff DC. The Vrock Aspect penalises enemy Reflex saves by `2`, which is treated as an effective `+2` against the traps.

**Low**

- Damage: `T = 36 + 1.5FD`; `SS = SDd6`; `G = 9d6 + FD`.
- DC: `+2` from Shadow Demon or Coloxus.

**Medium**

- Damage: `T = 45 + 1.5FD`; `SS = SDd6`; `G = 9d6 + FD`.
- Buff DC: `+3` Demonic Rage, `+2` Incubus and `+2` major Aspect, for `+7`.

**High: Babau + Vrock**

The Cave Fangs buff is prepared with Incubus active, then Babau replaces Incubus for the main encounter. This preserves the buff's inherited `+7 DC` while adding Babau's `+3d6` sneak-attack damage. Vrock contributes a further `+2` effective DC against Reflex saves; Demonic Rage adds `+3` directly to the trap.

\[
SS = (SD + 3)d6, \qquad DC = 7 + 3 + 2 = +12
\]

**High: Incubus + Vrock**

Keeping Incubus active adds another `+2` to the trap's effective DC, for `+14` total. This configuration does not gain Babau's additional sneak dice:

\[
SS = SDd6, \qquad DC = 7 + 3 + 2 + 2 = +14
\]

Both high configurations use the same Bolstered Trap damage as the medium tier: `45 + 1.5FD`.

??? demon-feature "Aspect of Incubus"
    {% include '_includes/aspect_incubus.md' %}

??? demon-feature "Aspect of Vrock"
    {% include '_includes/aspect_vrock.md' %}

??? demon-feature "Aspect of Babau"
    {% include '_includes/aspect_babau.md' %}

??? demon-feature "Aspect of Shadow Demon"
    {% include '_includes/aspect_shadow_demon.md' %}

??? demon-feature "Aspect of Coloxus"
    {% include '_includes/aspect_coloxus.md' %}

#### Azata

*Incredible Might* adds a morale damage bonus equal to Mythic Rank, this applies to both traps and Geomancy.

**Low**

\[
T = (3 \times 8 + 6) \times 1.5 + 1.5FD = 45 + 1.5FD
\]

**Medium**

\[
T = (3 \times 8 + 6 + 6) \times 1.5 + 1.5FD = 54 + 1.5FD
\]

For both tiers:

\[
SS = SDd6, \qquad G = 9d6 + 6 + FD
\]

*Favorable Magic* causes enemies to roll twice and take the worse result on saves against the Azata's spells. A successful save against a spell that normally halves damage reduces it by only 25%, leaving 75% damage.

??? azata-feature "Incredible Might"
    {% include '_includes/azata_incredible_might.md' %}

??? azata-feature "Favorable Magic"
    {% include '_includes/azata_favorable_magic.md' %}

### Mythic Rank 10

#### Angel

The low tier remains the no-mythic setup. The medium tier retains the Mythic Rank 6 Sword of Heaven configuration, with the same damage formula but `+3 DC` from *Piercing Rays*.

**Low:** `T = 36 + 1.5FD`; `SS = SDd6`; `G = 9d6 + FD`.

**Medium:** `T = 93 + 1.5FD`; `SS = SDd6`; `G = 13d6 + FD`.

Against eligible creatures, the relevant *Abolish* upgrade increases all three damage sources by 1.5×. For the Trap:

\[
T = 1.5(93 + 1.5FD) = 139.5 + 2.25FD
\]

??? angel-feature "Sword of Heaven"
    {% include '_includes/sword_of_heaven.md' %}

??? angel-feature "Everlasting Flame"
    {% include '_includes/everlasting_flame.md' %}

??? angel-feature "Sword of Holy Damage"
    {% include '_includes/sword_of_holy_damage.md' %}

??? angel-feature "Abolish Guile"
    {% include '_includes/abolish_guile.md' %}

??? angel-feature "Abolish Disease"
    {% include '_includes/abolish_disease.md' %}

??? angel-feature "Abolish Poison"
    {% include '_includes/abolish_poison.md' %}

??? angel-feature "Abolish Undeath"
    {% include '_includes/abolish_undeath.md' %}

#### Lich

*Fear Control* contributes `+10` flat damage at Mythic Rank 10.

**Low**

\[
T = (3 \times 8 + 10) \times 1.5 + 1.5FD = 51 + 1.5FD
\]

**Medium**

\[
T = (3 \times 8 + 10 + 6) \times 1.5 + 1.5FD = 60 + 1.5FD
\]

**High: Eclipse Chill**

The high tier uses *Eclipse Chill*, a limited resource available for three rounds per day. Geomancy is the proc that applies Eclipse Chill (on a failed save), after which the target becomes vulnerable to Negative Energy for the rest of combat. 

\[
T = (3 \times 8 + 10 + 6) \times 1.5^2 + 2.25FD = 90 + 2.25FD
\]

\[
SS = 1.5 \times SDd6
\]

\[
G = 1.5(9d6 + FD) + 2d8 + 10
\]

??? lich-feature "Eclipse Chill"
    {% include '_includes/lich_eclipse_chill.md' %}

#### Demon

At Mythic Rank 10, Demonic Rage contributes `+4`, Incubus contributes `+3`, and the major Aspect contributes `+3` to the buff DC, for `+10`. Vrock imposes a `–3` penalty on enemy Reflex saves, treated as an effective `+3` against the traps.

**Low**

- Damage: `T = 36 + 1.5FD`; `SS = SDd6`; `G = 9d6 + FD`.
- DC: `+3` from the major Aspect

**Medium**

- Damage: `T = 45 + 1.5FD`; `SS = SDd6`; `G = 9d6 + FD`.
- Buff DC: `+4` Demonic Rage, `+3` Incubus and `+3` major Aspect, for `+10`.

**High: Babau + Vrock**

Prepare the Cave Fangs buff with Incubus active, then switch to Babau and Vrock for the main encounter. The inherited buff DC remains `+10`; Demonic Rage and Vrock add a further `+4` and `+3` respectively. Babau adds `+4d6` sneak damage.

\[
SS = (SD + 4)d6, \qquad DC = 10 + 4 + 3 = +17
\]

**High: Incubus + Vrock**

Keeping Incubus active adds a further `+3` to the trap's effective DC, for `+20`. This setup does not gain Babau's extra sneak dice:

\[
SS = SDd6, \qquad DC = 10 + 4 + 3 + 3 = +20
\]

Both high configurations use `T = 45 + 1.5FD` and `G = 9d6 + FD`. Deskari provides a way to bypass physical damage immunity and damage reduction. 

??? demon-feature "Demonic Rage"
    {% include '_includes/demonic_rage.md' %}

??? demon-feature "Aspect of Incubus"
    {% include '_includes/aspect_incubus.md' %}

??? demon-feature "Aspect of Vrock"
    {% include '_includes/aspect_vrock.md' %}

??? demon-feature "Aspect of Babau"
    {% include '_includes/aspect_babau.md' %}

??? demon-feature "Aspect of Shadow Demon"
    {% include '_includes/aspect_shadow_demon.md' %}

??? demon-feature "Aspect of Coloxus"
    {% include '_includes/aspect_coloxus.md' %}

??? demon-feature "Aspect of Deskari"
    {% include '_includes/aspect_of_deskari.md' %}

#### Azata

*Incredible Might* contributes `+10` damage at Mythic Rank 10. 

**Low**

\[
T = (3 \times 8 + 10) \times 1.5 + 1.5FD = 51 + 1.5FD
\]

**Medium**

\[
T = (3 \times 8 + 10 + 6) \times 1.5 + 1.5FD = 60 + 1.5FD
\]

For both tiers:

\[
SS = SDd6, \qquad G = 9d6 + 10 + FD
\]

**High: Joy of Life**

The high tier adds *Joy of Life*, which converts attacks to Holy damage for a short duration. The spell is a standard action and lasts one round per two caster levels. The damage expressions remain the same as the medium tier; the benefit is conversion and the ability to deal with incorporeal enemies and physical damage reduction.

??? azata-feature "Joy of Life"
    {% include '_includes/joy_of_life.md' %}

#### Azata → Devil

The Devil retains the Azata features relevant here, including *Incredible Might* and *Favorable Magic*, but does not gain the later Azata improvements. 

**Low**

\[
T = (3 \times 8 + 10) \times 1.5 + 1.5FD = 51 + 1.5FD
\]

Decree of Conjuration add's `+10 DC`; `+5DC` to the buff and 
`+5DC` to the trap.

??? devil-feature "Hell's Decree"
    {% include '_includes/hells_decree.md' %}

    === "Decree of Hunt"
        {% include '_includes/decree_of_hunt.md' %}

    === "Decree of Vengeance"
        {% include '_includes/decree_of_vengeance.md' %}

    === "Decree of Hell's Fires"
        {% include '_includes/decree_of_hells_fires.md' %}

    === "Decree of School Magic"
        {% include '_includes/decree_of_school_magic.md' %}

Decree of Conjuration has synergy with Cave Fangs. 

**Medium**

\[
T = (3 \times 8 + 6 + 10) \times 1.5 + 1.5FD = 60 + 1.5FD
\]

Buff DC is `+5` from Hell's Decree, `+4` from Demonic Rage and `+3` from Incubus, for `+12`; the trap then receives another direct `+5`, for `+17`.

**High: Angel's Sword form**

Hell's Authority grants access to an Angel's Sword ability with one improvement. 

\[
T = (5 \times 8 + 6 + 10) \times 1.5 + 1.5FD = 84 + 1.5FD
\]

\[
G = 11d6 + 6 + FD
\]

The DC calculation is `+5` Hell's Decree, `+4` Demonic Rage, `+3` Incubus, and a further `+5` direct trap bonus, for `+24`. 

Against the target categories covered by the relevant Angel's Sword improvement, we apply a further 1.5× multiplier to Trap, Surprise Spells and Geomancy. This is conditional on the selected Abolish upgrade; it is not a general multiplier against every enemy:

\[
T = 1.5(84 + 1.5FD) = 126 + 2.25FD
\]

\[
SS = 1.5 \times SDd6, \qquad G = 1.5(11d6 + 6 + FD)
\]

??? devil-feature "Hell's Authority"
    {% include '_includes/devil_hells_authority.md' %}

??? angel-feature "Abolish Guile"
    {% include '_includes/abolish_guile.md' %}

??? devil-feature "Hell's Decree"
    {% include '_includes/hells_decree.md' %}

??? devil-feature "Decree of Conjuration"
    {% include '_includes/decree_of_school_magic.md' %}

#### Gold Dragon

Gold Dragon has *Perfect Mind* for Holy or Unholy conversion and *Perfect Soul* for automatic Empower and Maximise, with damage dice of traps (including Suprise Spells) are now d10s.

**Low: Perfect Soul**

\[
T = 3 \times 10 \times 1.5 + 1.5FD = 45 + 1.5FD
\]

\[
SS = SDd10, \qquad G = 9 \times 6 \times 1.5 + 1.5FD = 81 + 1.5FD
\]

**Medium: add Promise of Greatness**

\[
T = (3 \times 10 + 6) \times 1.5 + 1.5FD = 54 + 1.5FD
\]

Surprise Spells and Geomancy remain as in the low tier.

**High: add Dragon Might and Dragon Smite**

Dragon Might adds a further 1.5× multiplier for one round. Dragon Smite contributes `DS`, equal to half the Gold Dragon's Charisma modifier.

\[
T = (3 \times 10 + 6 + FD + DS) \times 1.5^2
  = 81 + 2.25(FD + DS)
\]

\[
SS = 1.5 \times SDd10
\]

\[
G = (9 \times 6 + FD + DS) \times 1.5^2
  = 121 + 2.25(FD + DS)
\]

The DC setup uses Dragon Breath with *Dispel Synergy*. Both infilict penalties that are counted as effective DC. 
This is `+1` when the enemy saves and the dispel fails, `+3` when the enemy saves and the dispel succeeds, and `+4` when the enemy does not save and the dispel succeeds. The high tier is shown as `0 to +4` because of a action economy conflict with Dragon Smite. 

??? gd-feature "Perfect Mind"
    {% include '_includes/gold_dragon_perfect_mind.md' %}

??? gd-feature "Perfect Soul"
    {% include '_includes/gold_dragon_perfect_soul.md' %}

??? gd-feature "Dragon Might"
    {% include '_includes/gold_dragon_dragon_might.md' %}

??? gd-feature "Dragon Smite"
    {% include '_includes/gold_dragon_dragon_smite.md' %}

??? gd-feature "Dragon Breath"
    {% include '_includes/gold_dragon_gold_dragon_breath.md' %}

??? feat "Dispel Synergy"
    {% include '_includes/dispel_synergy.md' %}
