## Introduction

Cave Fangs is considered cheesy, mainly because of its interaction with Enduring Spells. The Stalactites variant grants a buff that allows traps to be placed as free actions, with each placement consuming 10 minutes of its duration. Extend the buff to 24 hours and a single cast provides up to 144 traps.

That is a lot of free-action damage from a single spell slot. The ability is already quite strong without any elaborate combinations.

However, some may be surprised by how many things interact with each placement. Every trap counts as a spell cast for Geomancy, works with Surprise Spells, and can benefit from a wide range of damage bonuses. Add metamagic, damage conversion and mythic-path features, and the results can get rather ridiculous.

A Mythic Rank 6 Angel's trap can deal up to [344 damage](#mythic-rank-6-angel-damage-potential). Gold Dragon's Geomancy deals [159 damage](#gd-geo-aoe) to all enemies within 30 feet. Surprise Spells can add 19d6 damage per trap as a Demon, or [15d10](#gd-single) as a Gold Dragon. Across 144 traps, this results in some [extreme theoretical damage figures](#maximum-damage-potential).

The guide covers the mechanics, class options, mythic paths and individual interactions in detail. It also discusses potential pitfalls, weaknesses and ways to address them. The table below provides a quick overview, with links to the relevant guide sections and video demonstrations.

### Synergy overview

| Synergy | What it adds | Video |
|---|---|---|
| [Enduring Spells](#enduring-spells) | Extends the buff to 24 hours, allowing up to 144 free-action trap placements from one cast. | [02:26](https://youtu.be/KfNt9Z-UP_I?t=146) |
| [Geomancy](#geomancy) | Every trap placement triggers Geomancy. At character level 18 or higher, this can deal 9d6 damage in a 30-foot radius, with no save against the damage. It effectively adds a second area-damage effect to every trap. | [17:27](https://youtu.be/KfNt9Z-UP_I?t=1047), [50:46](https://youtu.be/KfNt9Z-UP_I?t=3046) |
| [Metamagic](#metamagic), [Plague of Madness](#meta-plague), [Promise of Greatness](#meta-greatness), [Perfect Soul](#gd-m10) | *Plague of Madness* provides Empower and Maximise; *Promise of Greatness* provides Bolster. These effects can be applied to the buff so that the traps inherit them. Gold Dragon eventually gets automatic Empower and Maximise through Perfect Soul. | [04:14](https://youtu.be/KfNt9Z-UP_I?t=254), [06:55](https://youtu.be/KfNt9Z-UP_I?t=415), [07:27](https://youtu.be/KfNt9Z-UP_I?t=447) |
| [Spell DC](#dc) | The traps inherit the DC of the Cave Fangs buff. Some bonuses also apply directly to the traps, resulting in the double DC bug. | [08:27](https://youtu.be/KfNt9Z-UP_I?t=507), [10:42](https://youtu.be/KfNt9Z-UP_I?t=642), [13:14](https://youtu.be/KfNt9Z-UP_I?t=794) |
| [Surprise Spells](#surprise-spells), [Gold Dragon](#mythic-gd) | Arcane Trickster adds sneak attack damage to the spell's damage. This is particularly effective with Gold Dragon; Perfect Soul changes the sneak attack dice to d10s. | [38:37](https://youtu.be/KfNt9Z-UP_I?t=2317), [50:59](https://youtu.be/KfNt9Z-UP_I?t=3059) |
| [Holy Conversion](#holy-conversion), [Negative Energy Conversion](#negative-energy-conversion), [DR and Incorporeal](#dr-and-incorporeal) | Holy or negative energy conversion helps overcome physical damage reduction and immunity. Holy damage also deals full damage to incorporeal enemies, unlike negative energy, which is halved. Conversion can also enable further elemental synergies. | [25:03](https://youtu.be/KfNt9Z-UP_I?t=1503), [39:34](https://youtu.be/KfNt9Z-UP_I?t=2374), [47:57](https://youtu.be/KfNt9Z-UP_I?t=2877) |
| [Elemental Conversion](#elemental-conversion), [Fire items](#fire-items), [Elemental Barrage](#elemental-barrage), [Hexes](#std-hexes) | Fire conversion enables *Flame Curse*, which multiplies trap damage by 1.5. It can also trigger *Call of the Fiery Things* and, with a second element, *Elemental Barrage*. | [27:46](https://youtu.be/KfNt9Z-UP_I?t=1666), [30:45](https://youtu.be/KfNt9Z-UP_I?t=1845), [53:28](https://youtu.be/KfNt9Z-UP_I?t=3208) |
| [Angel](#mythic-angel), [Lich](#mythic-lich), [Demon](#mythic-demon), [Azata](#mythic-azata), [Devil](#devil-m8), [Gold Dragon](#mythic-gd) | Angel adds damage dice and later converts damage to holy; Lich gets early damage conversion; Demon can reach very high DCs; Azata improves saving throw reliability; Gold Dragon has the highest damage ceiling. | Angel [14:07](https://youtu.be/KfNt9Z-UP_I?t=847); Lich [38:37](https://youtu.be/KfNt9Z-UP_I?t=2317); Gold Dragon [47:25](https://youtu.be/KfNt9Z-UP_I?t=2845) |
| [Standard actions](#your-standard-action) | Since traps are free actions, the standard action can be used for dispels, area debuffs, hexes or Dragon Breath. | [28:00](https://youtu.be/KfNt9Z-UP_I?t=1680), [48:14](https://youtu.be/KfNt9Z-UP_I?t=2894) |
| [Initiative](#initiative), [Mobility and stealth](#avoiding-enemy-retaliation) | Acting first helps prevent retaliation; mobility and stealth help deal with enemies outside trap range. | [21:00](https://youtu.be/KfNt9Z-UP_I?t=1260), [42:12](https://youtu.be/KfNt9Z-UP_I?t=2532) |

### Video showcase

The video starts with a walkthrough of the core mechanics, then moves into three gameplay showcases at different points in the game. The first demonstrates an Angel Shaman/Hellknight build at Mythic Rank 6; the second follows a Lich Arcane Trickster in Act 3 and the Treasure of the Midnight Isles DLC at Mythic Rank 3; the final showcase uses a Gold Dragon Arcane Trickster in Inevitable Excess (DLC 1) at Mythic Rank 10.

<div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/KfNt9Z-UP_I" title="Cave Fangs: Pathfinder Wrath of the Righteous build and synergy showcase" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


#### Video chapters and related guide sections

| Timestamp | Segment | What it covers | Related guide sections |
|---|---|---|---|
| [00:00](https://youtu.be/KfNt9Z-UP_I?t=0) | Intro screen | Opening title. | — |
| [00:11](https://youtu.be/KfNt9Z-UP_I?t=11) | Introduction | Overview of Cave Fangs and the interactions covered in the video. | [The Ability](#the-ability) |
| [01:00](https://youtu.be/KfNt9Z-UP_I?t=60) | Cave Fangs mechanics | Stalactites and Stalagmites, the buff duration, 144 placements and trap spell level. | [The Ability](#the-ability), [Enduring Spells](#enduring-spells), [Trap spell level](#trap-spell-level) |
| [04:14](https://youtu.be/KfNt9Z-UP_I?t=254) | Metamagic | Applying Empower, Maximise and Reach through Magus Arcana and Wizard Metamagic Mastery. | [Metamagic](#metamagic), [Magus Arcana](#magus-arcana), [Plague of Madness](#meta-plague), [Promise of Greatness](#meta-greatness) |
| [08:27](https://youtu.be/KfNt9Z-UP_I?t=507) | Heighten and DC inheritance | Heighten Spell, the buff's DC and how traps inherit it. | [Heighten](#heighten), [How the DC reaches the traps](#how-the-dc-reaches-the-traps) |
| [10:42](https://youtu.be/KfNt9Z-UP_I?t=642) | The double DC bug | Items, Spell Focus and Expanded Arsenal applying DC bonuses to both the buff and trap. | [The double DC bug](#the-double-dc-bug), [Spell Focus and Expanded Arsenal](#spell-focus-and-expanded-arsenal) |
| [14:07](https://youtu.be/KfNt9Z-UP_I?t=847) | Angel Shaman/Hellknight showcase (Act 4, MR6) | Buff preparation and combat setup for the first build. | [Angel](#mythic-angel), [Smites](#smites) |
| [17:27](https://youtu.be/KfNt9Z-UP_I?t=1047) | Geomancy | Terrain effects, damage per trap proc and the 30-foot area. | [Geomancy](#geomancy), [Geomancy terrain](#terrain) |
| [20:04](https://youtu.be/KfNt9Z-UP_I?t=1204) | Geomancy backlash | Direct self-damage and the temporary hit points from Gloves of Enduring Wizard. | [Geomancy Backlash](#geomancy-backlash), [Temporary hit points](#temporary-hit-points) |
| [22:32](https://youtu.be/KfNt9Z-UP_I?t=1352) | Angel features and Holy conversion | Sword of Heaven, Bound of Possibility, Everlasting Flame, Abolish Guile and Sword of Holy Damage. | [Angel](#mythic-angel), [Holy Conversion: Angel](#conversion-angel), [Solar Winds](#angel-solar-winds) |
| [25:03](https://youtu.be/KfNt9Z-UP_I?t=1503) | Holy conversion and backlash protection | Bypassing damage reduction and mitigating Geomancy backlash with Solar Winds and Broken Trickster. | [Holy Conversion](#holy-conversion), [Geomancy Backlash](#geomancy-backlash), [Broken Trickster](#broken-trickster) |
| [27:02](https://youtu.be/KfNt9Z-UP_I?t=1622) | Smites and Flame Curse | Smite damage on traps and Geomancy, allied Mark of Justice, Fire conversion and Flame Curse. | [Smites](#smites), [Elemental Conversion](#elemental-conversion), [Flame Curse](#std-hexes) |
| [30:45](https://youtu.be/KfNt9Z-UP_I?t=1845) | Elemental Barrage | Switching between Fire and Electricity to trigger Elemental Barrage. | [Elemental Barrage](#elemental-barrage), [Stormlord's Resolve](#elemental-barrage) |
| [34:46](https://youtu.be/KfNt9Z-UP_I?t=2086) | Evasion | How Evasion can negate trap damage and the role of Geomancy against high-Reflex enemies. | [Why DC Matters](#why-dc-matters), [Geomancy](#geomancy) |
| [36:34](https://youtu.be/KfNt9Z-UP_I?t=2194) | Incorporeal enemies | Physical damage limitations and using Bolt of Justice as an alternative. | [Incorporeal](#incorporeal), [The Angel](#mythic-angel) |
| [38:37](https://youtu.be/KfNt9Z-UP_I?t=2317) | Lich Arcane Trickster showcase (Act 3, DLC 3, MR3) | Surprise Spells, early damage conversion and the Lich combat setup. | [Lich](#mythic-lich), [Surprise Spells](#surprise-spells), [Arcane Trickster](#arcane-trickster) |
| [39:34](https://youtu.be/KfNt9Z-UP_I?t=2374) | Death of Elements | Negative Energy conversion, incorporeal damage and Devouring Lust. | [Negative Energy Conversion](#negative-energy-conversion), [Death of Elements](#death-of-elements), [Downsides compared to (un)holy](#neg-downsides) |
| [41:26](https://youtu.be/KfNt9Z-UP_I?t=2486) | Geomancy backlash and Death Ward | Negative Energy conversion also applies to the backlash; Death Ward prevents it. | [Geomancy Backlash](#geomancy-backlash), [Death Ward](#death-ward) |
| [42:12](https://youtu.be/KfNt9Z-UP_I?t=2532) | Mobility and stealth | Avoiding retaliation from enemies outside trap range by using stealth. | [Avoiding enemy retaliation](#avoiding-enemy-retaliation), [Stealth](#stealth) |
| [43:08](https://youtu.be/KfNt9Z-UP_I?t=2588) | Sneak attack limitations | Uncanny Dodge, undead immunity, Evasion, Ascendant Element and Vulnerability Curse. | [Surprise Spells](#surprise-spells), [Uncanny Dodge](#uncanny-dodge), [Resistances and immunities](#resistances-and-immunities), [Vulnerability Curse](#std-hexes) |
| [47:25](https://youtu.be/KfNt9Z-UP_I?t=2845) | Gold Dragon Arcane Trickster showcase (Inevitable Excess, DLC 1, MR10) | Build choices and Gold Dragon features, including Perfect Mind, Perfect Soul and Dragon Breath. | [Gold Dragon](#mythic-gd), [Perfect Soul](#gd-m10), [Dragon Breath](#mythic-gd) |
| [50:04](https://youtu.be/KfNt9Z-UP_I?t=3004) | Gold Dragon combat | Dragon Breath, Empowered and Maximised traps, d10 Surprise Spells and Geomancy. | [Gold Dragon](#mythic-gd), [Surprise Spells](#surprise-spells), [Maximum damage potential](#maximum-damage-potential) |
| [51:36](https://youtu.be/KfNt9Z-UP_I?t=3096) | Dragon Smite and Dragon Might | Flat damage from Charisma and the 50% damage increase, including their effect on Geomancy and sneak attacks. | [Dragon Smite](#gd-m10), [Gold Dragon damage potential](#mythic-rank-10-gold-dragon-damage-potential) |
| [53:28](https://youtu.be/KfNt9Z-UP_I?t=3208) | Bane of Flesh and Call of the Fiery Things | The ring's unintended Fire conversion and its interaction with Call of the Fiery Things. | [Fire items](#fire-items), [Elemental Conversion](#elemental-conversion) |
