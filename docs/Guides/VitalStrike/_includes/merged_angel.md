## Transition: Merged Angel


This transition requires very little feat investment and can be made from almost any build.

While Bolt of Justice is used for the calculations, Storm of Justice does the same damage but AoE, and one would probably switch spell specialization to it end-game.

### Bolt of Justice

!!! spell "Bolt of Justice"
    {% include '_includes/bolt_of_justice.md' %}

??? spell "Storm of Justice"
    {% include '_includes/storm_of_justice.md' %}

| Damage | Debuff |
|---|---|
| No touch attack needed. | Hard to Scale |
| No save. | |
| No Spell Resistance. | |

Only feats that scale damage are Metamagics and Spell Specialization (+2 CL).

Feats, aside from Metamagics (Bolster, can get M+E from rods) and spell specialization (+2 CL), make little difference to the spell. Caster level is most important, so it's best to stay pure, except for prestige classes that advance caster level. Loremaster is good as it allows to double up on Spell Specialization. Naturally it makes sense to build for early game.

### Example Build

An early **Greater Vital Strike** build for **Wildland Shaman** via Loremaster was recommended in the original video. 

Wildland Shaman is, however, already one of the strongest early-game melee classes. Its combination of self-buffs, Hexes, and an animal companion makes it capable of soloing Acts 1 and, potentially, Act 2 with little difficulty. As a result, the additional early-game power provided by Greater Vital Strike is less valuable.

A Loremaster level also interferes with animal companion progression. At character level 7, Medium companions such as the Dog grow to Large size, allowing them to be ridden. This is also the earliest point at which both the main character and companion can acquire **Outflank**, representing a significant power spike.

Taking Loremaster at level 6 delays companion progression. **Boon Companion** restores the companion's level, but postpones **Outflank** until level 9. Consequently, levels 7 and 8 become weaker despite being the levels where an early Greater Vital Strike investment is expected to provide the greatest benefit.

Level 6 is where Greater Vital Strike offers the highest relative value. In practice, however, Wildland Shaman progresses through this level very quickly during solo play, resulting in only a short window where the investment has a noticeable impact.

A better fit is a divine caster that does not rely on an animal companion. **Shadow Shaman** is an option for Rowdy-based builds, but the following recommendation instead uses the base **Shaman**.

Although unable to solo as effectively, a standard Shaman can still comfortably reach level 6 by following the optimised [**Ramien Kill Route**](../Feud/feud.md#peaceful-kill-ramien-optimized) for *Feud of the Faithful*. Ember can then be recruited and progressed into an animal companion class for a tank, with the remaining companions joining afterwards. Since recruitment begins at level 6, the party remains there for a relatively long time, maximising the value of an early Greater Vital Strike.

The benefit of Standard Shaman is a somewhat stronger late-game. It can qualify naturally for **Winter Witch**, gaining additional caster levels for Bolt of Justice and Storm of Justice. This can be done by selecting **Frost Spirit** at character creation, sacrificing the stronger early-game **Battle Spirit**, or by obtaining Frost through Second Spirit Mythic. The loss of Battle Spirit is largely offset by the early Greater Vital Strike power spike.

??? mythic-feature "Second Spirit"
    {% include '_includes/second_spirit.md' %}

??? class-feature "Freezing Cold"
    {% include '_includes/freezing_cold.md' %}

??? note
    Wildland Shaman can also qualify for Winter Witch by taking a one-level Witch dip with the Frost Patron, although this costs an additional caster level.

Another advantage of the base Shaman is **Wandering Spirit**, which grants temporary access to another spirit's spells and abilities. This substantially reduces the opportunity cost of selecting Frost Spirit instead of Battle Spirit as the primary spirit.

A useful interaction is that metamagicked versions of spirit spells are retained after switching spirits. 

??? mythic-feature "Wandering Spirit"
    {% include '_includes/wandering_spirit.md' %}


!!! tip "Example Build"
    **Frost Spirit Shaman** with a **Loremaster** level at character level 6 for **Greater Vital Strike**. Transition into an **Angel blaster**, obtaining Spell Specialization from Loremaster level 3 before taking six levels of **Winter Witch**.
    

### Unnecessary Damage Maximization
#### Geomancer Dip

Lose one caster level, but we gain **Geomancy** and a bloodline.

!!! class-feature "Geomancy"
    {% include '_includes/geomancy.md' %}


The bloodline that we want is **Elemental Bloodline - Fire**

!!! class-feature "Bloodline: Elemental Bloodline - Fire"
    Grants various abilities, the important one being a toggleable power: Elemental Bloodline Arcana.

!!! class-feature "Elemental Bloodline Arcana"
    {% include '_includes/elemental_bloodline_arcana.md' %}

#### Fire Vulnerability

A creature with Fire Vulnerability takes half again as much damage (+50%) from the fire energy type.

!!! class-feature "Flame Curse"
    {% include '_includes/flame_curse.md' %}

!!! item "Treacherous Flame"
    {% include '_includes/treacherous_flame.md' %}

For both of these we want someone else to do the applying.

#### School Mastery stacking trough Expanded Arsenal

A bugged interaction between **School Mastery** and **Expanded Arsenal** allows the bonus to stack onto every subsequently selected school.

??? mythic-feature "School Mastery"
    {% include '_includes/school_mastery.md' %}

??? mythic-feature "Expanded Arsenal"
    {% include '_includes/expanded_arsenal.md' %}


| Mythic Rank | Mythic Feat | Abjuration | Conjuration | Evocation | Illusion | Transmutation |
|-------------|-------------|:----------:|:---------:|:-------------:|:-----------:|:---------:|
| 2 | School Mastery (Abjuration) | +1 | | | | |
| 4 | Expanded Arsenal (Conjuration) | +1 | +1 | | | |
| 6 | Expanded Arsenal (Evocation) | +1 | +2 | +2 | | |
| 8 | Expanded Arsenal (Illusion) | +1 | +3 | +3 | +3 | |
| 10 | Expanded Arsenal (Transmutation) | +1 | +4 | +4 | +4 | +4 |

[Reddit Source](https://old.reddit.com/r/Pathfinder_Kingmaker/comments/1f1aq54/on_expanded_arsenal_233k_a_dance_of_masks/)
    

### Bolt of Justice Damage versus a Guile Demon

For absolute maximum damage, some of the choices are less practical.

!!! abstract "Build Overview"
    **Build:** Wildland Shaman 10, Winter Witch 6, Loremaster 3, Geomancer 1, (Merged) Angel 10

    **Mythic:** Abundant Casting x3, Ascendant Element: Fire, School Mastery: Any but Conjuration, Expanded Arsenal: Conjuration, Expanded Arsenal: Any x3, Any

**Caster Level:**

$$
\begin{aligned}
&29\ (\text{Merged Angel with Shaman}) + 2\ (\text{Winter Witch}) \\
&+ 2\ (\text{Spell Specialization}) + 2\ (\text{Spell Specialization, Loremaster Wizard Feat}) \\
&+\ 4\ (\text{School Mastery + 4x Expanded Arsenal Bug}) + 3\ (\text{Robe of the Seven Sins, DLC3}) \\
&+\ 3\ (\text{Sin Mage's Staff, DLC6}) + 2\ (\text{Storyteller's Knowledge}) + 1\ (\text{Fresh Yoghurt}) = 48
\end{aligned}
$$

**Sword of Heaven:** +2 dice.

??? angel-feature "Sword of Heaven"
    {%  include '_includes/sword_of_heaven.md'  %}

**The Bound of Possibility:** +2 dice. 

??? item "The Bound of Possibility"
    {% include '_includes/the_bound_of_possibility.md' %}

**Abolish Disease/Guile/Poison/Undeath:** Creatures which apply disease/compulsion/poison effect or are undead take 50% more damage.

??? angel-feature "Abolish Sword of Heaven Improvements"
    === "Abolish Disease"
        {%  include '_includes/abolish_disease.md'  %}
        
    === "Abolish Guile"
        {%  include '_includes/abolish_guile.md'  %}
    
    === "Abolish Poison"
        {%  include '_includes/abolish_poison.md'  %}
    
    === "Abolish Undeath"
        {%  include '_includes/abolish_undeath.md'  %}
    

**Metamagics, through rods or feats:**

??? feat "Metamagic (Bolster Spell)"
    {%  include '_includes/meta_bolster.md'  %}
    
??? feat "Metamagic (Empower Spell)"
    {%  include '_includes/meta_empower.md'  %}

??? feat "Metamagic (Maximize Spell)"
    {%  include '_includes/meta_maximize.md'  %}

!!! info "Note"
    The interaction between Empower Spell and Maximize Spell is inconsistent. For some spells, such as Bolt of Justice and Rain of Halberds, the additional damage granted by Empower is also maximized. For others, such as Hellfire Ray, the Empower portion is rolled normally instead of being maximized.

**Bolstered Bolt of Justice**

$$
\begin{aligned}
&= 48d10 + 4d10\ (\text{Sword of Heaven + The Bound of Possibility}) + 48 \times 2\ (\text{Bolster}) \\
&= 52d10 + 96
\end{aligned}
$$

**MEB Bolt of Justice on a Flame Cursed Guile Demon**

$$
\begin{aligned}
&= (52d10 + 96) \times 1.5 \times 1.5 \times 1.5 \\
&= \mathbf{2079}\ (\text{Maximized})
\end{aligned}
$$

**Geomancy**

$$
\begin{aligned}
&= 6d6\ (\text{Level 6 Spell}) + 4d6\ (\text{Sword of Heaven + The Bound of Possibility}) \\
&= 10d6
\end{aligned}
$$

**Geomancy Guile**

$$
= 10d6 \times 1.5
$$
