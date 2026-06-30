## Trickster (Support and Damage) 

Most move actions are supportive. Rather than overly trying to maximize damage on an already suboptimal damage build, it's better to focus on utility.

Perception II, Knowledge (Arcana) I-III, and Knowledge (World) I-III benefit the entire team. Trickery I-II, UMD I, and Religion I offer support abilities, while Religion II-III grant domains which generally provide group buffs.

### Evercold damage

Let's look at the main Trickster features that add some damage to an Evercold build.

Trickster gains inherent sneak attack progression and can make good use of regular cheap **Sense Vitals** scrolls through **Infuse Magic Device**. This removes the need for a Loremaster dip on caster builds, while non-caster builds simply gain additional sneak attack damage.

??? trickster-feature "Sneak Attack"
    {% include '_includes/trickster_sneak.md' %}

??? trickster-feature "Infuse Magic Device"
    {% include '_includes/infuse_magic_device.md' %}

Another notable option is **Knowledge (Arcana) II**. This Mythic Trick can add the **Agile** weapon property to generated items. Since **Finnean** can be rerolled indefinitely, this makes it easy to obtain an Agile version of any weapon type. By save scumming we can also get Agile on a unique weapon; for example Evercold.

??? trickster-feature "Knowledge (Arcana) II"
    {% include '_includes/arcana_2.md' %}

??? item-weapon "Agile Weapon Trait"
    {% include '_includes/agile_trait.md' %}

Knowledge (Arcana) II does compete with several powerful Improved Mythic Tricks. **Perception II**, for example, grants the entire party the Completely Normal Spell metamagic feat and unlocks the improved critical feats. While those critical feats are less valuable for Vital Strike than for full attacks, they can potentially be quite useful for the rest of the party.

Knowledge (Arcana) II is not purely selfish either, however. Companions benefit as well. 

For example, an Agile Gnome Hooked Hammer largely solves the Strength versus Dexterity dilemma for Regill builds, while Camellia can benefit from an Agile crossbow.

It is worth noting, however, that the Agile weapon property only grants 1× Dexterity to damage when using a two-handed weapon, or a one-handed weapon wielded in two hands. This is unlike Mythic Weapon Finesse and the Aldori Swordlord's Deft Strike, both of which grant the full 1.5× Dexterity modifier in those cases.


Using the Demon example as a baseline, we can estimate the damage of the Shadow Shaman Trickster variant. An equivalent Freebooter build deals less damage due to its lack of inherent sneak attack progression. A worked damage example may be added in a future update, alongside a dedicated Freebooter build.

**Dexterity Example:** $25$ (Base) $+\ 9$ (Belt) $+\ 6$ (Profane Ascension) $+\ 8$ (Grand Mutagen through World III) $+\ 6$ (Microscopic Proportions) $=\ 54$

**Adjustments:** $+\ 27$ (Agile) $-\ 4$ (Demon Rage) $-\ 10$ (Sure Footed, only first bolt) $+\ 1d6$ (comparative sneak)

**VS Evercold Total:**

$$16d8 + 252 + 57d6 + 4d8 + 63 + 57d6 + 4d6 = 20d8 + 315 + 118d6$$

<figure markdown="span">
  ![Simulated damage distribution for 20d8 + 315 + 118d6 damage](png/dice_sim_trickster.png)
  <figcaption markdown="span">Simulated damage distribution for $20d8 + 315 + 118d6$ damage. $818$ median and average. $90$ percentile range is $[783, 853]$.</figcaption>
</figure>

### Rain of Halberds

The in-game description is inaccurate. **Rain of Halberds** makes no attack rolls, meaning it also cannot critically hit.

Its main strength is that, much like **Bolt of Justice** and **Storm of Justice**, its damage scales almost entirely with caster level and metamagic with no way for enemies to save versus or resist it. Because Trickster can get the metamagic through the **Rod of Magical Affinity** and **Reuse Magic Device** combo, the spell requires no feat investment to do a decent amount of damage. This makes it an attractive option for transitioning almost any build into a competent offensive caster. 

??? trickster-feature "Reuse Magic Device"
    {% include '_includes/umd_2.md' %}

??? item "Rod of Magical Affinity"
    {% include '_includes/rod_of_magical_affinity.md' %}

The downside is the lack of a merged spellbook. Unlike Angel, Trickster cannot accelerate its caster level progression, so the spell comes online considerably later and does a lot less damage.

Rain of Halberds is unlocked at incredibly late at **Mythic Rank 7**, at the start of Act 5. By then you already have the Rod of Magical Affinity.


##### Damage

The mythic 7 damage with the wand and Robe of the Seven Sins (both from Act 4 Treasure Isles):

$$
\begin{aligned}
(15d10 + 15 \times 2 (\text{Bolster}))  \times 1.5 (\text{Empower}) &= \mathbf{270} (\text{Maximized}) 
\end{aligned}
$$

??? info "Metamagics"
    ??? feat "Metamagic (Bolster Spell)"
        {%  include '_includes/meta_bolster.md'  %}
        
    ??? feat "Metamagic (Empower Spell)"
        {%  include '_includes/meta_empower.md'  %}
    
    ??? feat "Metamagic (Maximize Spell)"
        {%  include '_includes/meta_maximize.md'  %}
    
    ??? info "Empower and Mazimize Interaction"
        The interaction between Empower Spell and Maximize Spell is inconsistent. For some spells, such as Bolt of Justice and Rain of Halberds, the additional damage granted by Empower is also maximized. For others, such as Hellfire Ray, the Empower portion is rolled normally instead of being maximized.


With some feat investment; Spell Specialization taken twice once normally and once trough Loremaster for +4 CL. Honestly given the late unlock it's not that worth investing.

$$
\begin{aligned}
(19d10 + 19 \times 2 (\text{Bolster}))  \times 1.5 (\text{Empower}) &= \mathbf{342} (\text{Maximized}) 
\end{aligned}
$$

End-game capped version. Technically can get spell specialization up to 4 times, but let's keep it realistic. [Flame conversion with fire vulnerability](#fire-vulnerability) is also possible, but will realistically only effect one enemy at a time.

**Caster Level** 

$$
\begin{aligned}
&20\ (\text{Trickster}) + 2\ (\text{Spell Specialization}) + 2\ (\text{Spell Specialization, Loremaster Wizard Feat}) \\
&+\ 2 (\text{Spell Specialization, World III}) +1\ (\text{School Mastery}) + 3\ (\text{Robe of the Seven Sins, DLC3}) \\
&+\ 3\ (\text{Sin Mage's Staff, DLC6}) + 2\ (\text{Storyteller's Knowledge}) + 1\ (\text{Fresh Yoghurt}) = 36
\end{aligned}
$$

**Damage:**

$$
\begin{aligned}
(36d10 + 36 \times 2 (\text{Bolster}))  \times 1.5 (\text{Empower}) &= \mathbf{648} (\text{Maximized}) 
\end{aligned}
$$
