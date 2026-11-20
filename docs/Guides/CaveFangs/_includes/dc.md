### DC

As with regular spells, trap saving throws are affected by two kinds of modifiers: bonuses to DC and penalties to enemy saving throws. For a full list, see the [Bonuses (WotR) page](https://pathfinderkingmaker.fandom.com/wiki/Bonuses_(WotR)#Spell_DC) on the wiki.

Penalties include conditions such as shaken or sickened, Dispel Synergy, Ambuscading Spell and similar effects. These work as expected, just as they do for other spells.

#### Why DC Matters

Cave Fangs traps deal half damage on a successful save, so enemies with high Reflex saves already reduce their damage output considerably. The greater concern is evasion. Against an enemy with evasion and a high Reflex save, traps may deal no damage at all. [Geomancy](#geomancy) still damages these enemies, but the loss in damage remains substantial.

??? class-feature "Evasion"
    {% include '_includes/evasion.md' %}

#### How the DC reaches the traps

All DC bonuses that would normally apply according to their descriptions also apply to the Cave Fangs: Stalactites buff. When the buff is cast, its DC is inherited by the Stalactites Trap ability. These bonuses do not need to apply directly to the trap's DC.

This allows DC and casting-stat items to be equipped for the buff's duration, then replaced with more useful equipment for combat. Heighten, the casting ability score, the Dagger of the Betrayer and the Quarterstaff of the War Mage all work this way.

??? item-weapon "Dagger of the Betrayer"
    {% include '_includes/dagger_of_the_betrayer.md' %}

??? item-weapon "Quarterstaff of the War Mage"
    {% include '_includes/quarterstaff_of_the_war_mage.md' %}

#### The double DC bug

!!! bug "Some DC bonuses apply twice"
    Some DC increases apply to the Cave Fangs buff, as expected, but **also apply directly to the trap itself**.

    - When the buff is cast, the trap inherits its DC. This is normal.
    - While the bonus remains active, it also increases the trap's DC directly, so it is counted a second time.
    - Unequipping the item that provides the bonus leaves only the inherited increase, as with other DC bonuses.
    - Equipping the item after casting means the bonus is not included in the inherited DC, but still increases the trap's DC directly.

The following sources are known to be affected:

??? feat "Spell Focus"
    {% include '_includes/spell_focus.md' %}

??? feat "Greater Spell Focus"
    {% include '_includes/greater_spell_focus.md' %}

??? mythic-feature "Mythic Spell Focus"
    {% include '_includes/mythic_spell_focus.md' %}

??? mythic-feature "Expanded Arsenal"
    {% include '_includes/expanded_arsenal.md' %}

??? item-weapon "Numerian Greatsword"
    {% include '_includes/numerian_greatsword.md' %}

??? item "Robe of the Seven Sins"
    {% include '_includes/robe_of_the_seven_sins.md' %}

??? item "Heartstone of the Night Hag Queen"
    {% include '_includes/heartstone_of_the_night_hag_queen.md' %}

??? mythic-feature "Hell's Decree"
    {% include '_includes/hells_decree.md' %}

    === "Decree of Hunt"
        {% include '_includes/decree_of_hunt.md' %}

    === "Decree of Vengeance"
        {% include '_includes/decree_of_vengeance.md' %}

    === "Decree of Hell's Fires"
        {% include '_includes/decree_of_hells_fires.md' %}

    === "Decree of School Magic"
        {% include '_includes/decree_of_school_magic.md' %}

??? demon-feature "Demonic Rage"
    {% include '_includes/demonic_rage.md' %}

Hell's Decree comes from the [Devil](#devil-m8) path.

#### Spell Focus and Expanded Arsenal

The Expanded Arsenal exploit can increase the Spell Focus bonuses to **+16 DC** at Mythic Rank 10, at the cost of all five mythic feats. There are two variations, both covered in detail in the Steam guide *DC magic for dummies: the Art of dominant Crowd Control!* by Raven Paradox. I learned a lot from this guide.

Because of the double DC bug, this provides up to **+32 DC** to the traps.

#### Numerian Greatsword

The Numerian Greatsword appears in the list above, but is awkward to use:

- It has a limited number of charges, which are consumed each round.
- It is a two-handed weapon, so it competes for hand slots with [Plague of Madness](#meta-plague).
- Unequipping it removes all its charges, which only return after resting. Other weapons can be changed without losing their charges.

Without the last limitation, Plague of Madness could be used to buff Cave Fangs before switching to the Numerian Greatsword for its +2 direct DC bonus. However, equipping Plague of Madness to cast the buff also removes the Greatsword's charges.

Titan Fighter's Giant Weapon Wielder offers a solution. It allows a two-handed weapon to be wielded in one hand, making it possible to use Plague of Madness and the Numerian Greatsword together. This also provides the +2 inherited DC bonus, for a total of +4 DC. After casting the buff, Plague of Madness can be replaced with another weapon; the Greatsword must remain equipped.

??? class-feature "Giant Weapon Wielder"
    {% include '_includes/giant_weapon_wielder.md' %}

Once the Greatsword's charges are exhausted, the Quarterstaff of the War Mage can be used to cast the buff instead. This staff only affects the DC of Cave Fangs: Stalactites.
