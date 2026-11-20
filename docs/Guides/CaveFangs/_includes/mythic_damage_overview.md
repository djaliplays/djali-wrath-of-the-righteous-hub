## Mythic damage overview

The tables compare Cave Fangs damage at Mythic Ranks 3, 6 and 10. The tiers describe the additional setup and resource cost, not the damage level: 

- **Low** uses only the Cave Fangs buff and effects that are effectively free or persistent; 
- **Medium** adds a modest setup cost, such as preparing the buff in a separate encounter or relying on a shorter-duration effect; 
- **High** uses a limited resource or a short-duration ability reserved for difficult encounters.

The figures are per trap (of which we have up to **144** per Cave Fangs cast). 

`SD` is the character's total sneak-attack dice. 

Geomancy uses `G = min(9, floor(ChL / 2))`; Mythic Rank 6 and above assumes `ChL 20`, so `G = 9`.

A successful Reflex save normally leaves **50%** of Trap and Surprise Spells damage. With Azata's *Favorable Magic*, it leaves **75%**. Evasion still negates Trap and Surprise Spells damage on a successful Reflex save. 

Geomancy is shown in grey where its 1d8 self-damage is not prevented.

Energy conversion and physical damage bypass are separate flags, since Demon has a way to achieve the latter without the former. 

Conversion to Energy also enables further conversion to an [Element](elemental-conversion). This allows the character to benefit from:

- Flame Curse: another 1.5x multiplier on trap damage
- Call of the Fiery Things: 4d6 damage on each trap cast (36 for Gold Dragon)
- Elemental Barrage: Mythic Level x d6 damage when procced


[See the full calculations, assumptions and feature descriptions](#mythic-damage-calculations).

### No mythic path

| Tier | Trap | Surprise Spells | Geomancy | Reflex save | Mythic DC | Damage setup | DC setup | Energy conversion | Incorporeal / DR |
|---|---:|---:|---:|---:|---|---|---|---|---|
| Low | `36 + 1.5FD` | `SDd6` | <span style="color: #999;">`Gd6 + FD`</span> | 50% taken | — | Plague of Madness | — | No | No |
| Medium | `45 + 1.5FD` | `SDd6` | <span style="color: #999;">`Gd6 + FD`</span> | 50% taken | — | Plague of Madness; Promise of Greatness | — | No | No |

### Mythic Rank 3

| Path | Tier | Trap | Surprise Spells | Geomancy | Reflex save | Mythic DC | Damage setup | DC setup | Energy conversion | Incorporeal / DR |
|---|---|---:|---:|---:|---:|---|---|---|---|---|
| Angel | Low | `36 + 1.5FD` | `SDd6` | <span style="color: #999;">`Gd6 + FD`</span> | 50% taken | — | Plague of Madness | — | No | No |
| Angel | Medium | `45 + 1.5FD` | `SDd6` | <span style="color: #999;">`Gd6 + FD`</span> | 50% taken | — | Plague of Madness; Promise of Greatness | — | No | No |
| Angel | High | `69 + 1.5FD` | `SDd6` | <span style="color: #999;">`(G + 2)d6 + FD`</span> | 50% taken | — | Plague of Madness; Promise of Greatness; Sword of Heaven | — | No | No |
| Lich | Low | `36 + 1.5FD` | `SDd6` | `Gd6 + FD` | 50% taken | — | Plague of Madness; Death of Elements | — | Yes | No |
| Lich | Medium | `45 + 1.5FD` | `SDd6` | `Gd6 + FD` | 50% taken | — | Plague of Madness; Promise of Greatness; Death of Elements | — | Yes | No |
| Demon | Low | `36 + 1.5FD` | `SDd6` | <span style="color: #999;">`Gd6 + FD`</span> | 50% taken | — | Plague of Madness | — | No | No |
| Demon | Medium | `45 + 1.5FD` | `SDd6` | <span style="color: #999;">`Gd6 + FD`</span> | 50% taken | `+2` | Plague of Madness; Promise of Greatness | Demonic Rage | No | No |
| Demon | High | `45 + 1.5FD` | `SDd6` | <span style="color: #999;">`Gd6 + FD`</span> | 50% taken | `+4` | Plague of Madness; Promise of Greatness | Demonic Rage; double application to buff and trap | No | No |
| Azata | Low | `36 + 1.5FD` | `SDd6` | <span style="color: #999;">`Gd6 + FD`</span> | 50% taken | — | Plague of Madness | — | No | No |
| Azata | Medium | `45 + 1.5FD` | `SDd6` | <span style="color: #999;">`Gd6 + FD`</span> | 50% taken | — | Plague of Madness; Promise of Greatness | — | No | No |

### Mythic Rank 6

| Path | Tier | Trap | Surprise Spells | Geomancy | Reflex save | Mythic DC / save effect | Damage setup | DC setup | Energy conversion | Incorporeal / DR |
|---|---|---:|---:|---:|---:|---|---|---|---|---|
| Angel | Low | `36 + 1.5FD` | `SDd6` | `9d6 + FD` | 50% taken | `+2` | Plague of Madness | — | No | No |
| Angel | Medium | `93 + 1.5FD` | `SDd6` | `13d6 + FD` | 50% taken | `+2` | Plague of Madness; Promise of Greatness; Sword of Heaven; Bound of Possibility | Piercing Rays | Yes | Yes |
| Angel | Medium, eligible targets | `139.5 + 2.25FD` | `1.5 × SDd6` | `1.5 × (13d6 + FD)` | 50% taken | `+2` | As above; Abolish Guile | Piercing Rays | Yes | Yes |
| Lich | Low | `45 + 1.5FD` | `SDd6` | `9d6 + FD` | 50% taken | — | Plague of Madness; Death of Elements; Fear Control | — | Yes | No |
| Lich | Medium | `54 + 1.5FD` | `SDd6` | `9d6 + FD` | 50% taken | — | Plague of Madness; Promise of Greatness; Death of Elements; Fear Control | — | Yes | No |
| Demon | Low | `36 + 1.5FD` | `SDd6` | `9d6 + FD` | 50% taken | `+2` | Plague of Madness | Shadow Demon or Coloxus | No | No |
| Demon | Medium | `45 + 1.5FD` | `SDd6` | `9d6 + FD` | 50% taken | `+7` | Plague of Madness; Promise of Greatness | Demonic Rage; Incubus; Shadow Demon or Coloxus | No | No |
| Demon | High, Babau + Vrock | `45 + 1.5FD` | `(SD + 3)d6` | `9d6 + FD` | 50% taken | `+12` | Plague of Madness; Promise of Greatness; buff prepared with Incubus, then Babau + Vrock | Incubus buff; Demonic Rage; Vrock; Major Aspect | No | No |
| Demon | High, Incubus + Vrock | `45 + 1.5FD` | `SDd6` | `9d6 + FD` | 50% taken | `+14` | Plague of Madness; Promise of Greatness | Demonic Rage; Incubus buff; Vrock; Major Aspect | No | No |
| Azata | Low | `45 + 1.5FD` | `SDd6` | `9d6 + 6 + FD` | 75% taken | Favorable Magic | Plague of Madness; Incredible Might | Favorable Magic | No | No |
| Azata | Medium | `54 + 1.5FD` | `SDd6` | `9d6 + 6 + FD` | 75% taken | Favorable Magic | Plague of Madness; Promise of Greatness; Incredible Might | Favorable Magic | No | No |

### Mythic Rank 10

| Path | Tier | Trap | Surprise Spells | Geomancy | Reflex save | Mythic DC / save effect | Damage setup | DC setup | Energy conversion | Incorporeal / DR |
|---|---|---:|---:|---:|---:|---|---|---|---|---|
| Angel | Low | `36 + 1.5FD` | `SDd6` | `9d6 + FD` | 50% taken | `+3` | Plague of Madness | — | No | No |
| Angel | Medium | `93 + 1.5FD` | `SDd6` | `13d6 + FD` | 50% taken | `+3` | Plague of Madness; Promise of Greatness; Sword of Heaven; Bound of Possibility | Piercing Rays | Yes | Yes |
| Angel | Medium, eligible targets | `139.5 + 2.25FD` | `1.5 × SDd6` | `1.5 × (13d6 + FD)` | 50% taken | `+3` | As above; choose the relevant Abolish upgrade | Piercing Rays | Yes | Yes |
| Lich | Low | `51 + 1.5FD` | `SDd6` | `9d6 + FD` | 50% taken | — | Plague of Madness; Death of Elements; Fear Control | — | Yes | No |
| Lich | Medium | `60 + 1.5FD` | `SDd6` | `9d6 + FD` | 50% taken | — | Plague of Madness; Promise of Greatness; Death of Elements; Fear Control | — | Yes | No |
| Lich | High | `90 + 2.25FD` | `1.5 × SDd6` | `1.5 × (9d6 + FD) + 2d8 + 10` | 50% taken | — | Plague of Madness; Promise of Greatness; Death of Elements; Fear Control; Eclipse Chill | — | Yes | No |
| Demon | Low | `36 + 1.5FD` | `SDd6` | `9d6 + FD` | 50% taken | `+3` | Plague of Madness | Shadow Demon or Coloxus | No | No |
| Demon | Medium | `45 + 1.5FD` | `SDd6` | `9d6 + FD` | 50% taken | `+10` | Plague of Madness; Promise of Greatness | Demonic Rage; Incubus; Shadow Demon or Coloxus | No | No |
| Demon | High, Babau + Vrock | `45 + 1.5FD` | `(SD + 4)d6` | `9d6 + FD` | 50% taken | `+17` | Plague of Madness; Promise of Greatness; buff prepared with Incubus, then Babau + Vrock | Incubus buff; Demonic Rage; Vrock; Major Aspect | No | Yes |
| Demon | High, Incubus + Vrock | `45 + 1.5FD` | `SDd6` | `9d6 + FD` | 50% taken | `+20` | Plague of Madness; Promise of Greatness | Demonic Rage; Incubus; Vrock; Major Aspect | No | Yes |
| Azata | Low | `51 + 1.5FD` | `SDd6` | `9d6 + 10 + FD` | 75% taken | Favorable Magic | Plague of Madness; Incredible Might | Favorable Magic | No | No |
| Azata | Medium | `60 + 1.5FD` | `SDd6` | `9d6 + 10 + FD` | 75% taken | Favorable Magic | Plague of Madness; Promise of Greatness; Incredible Might | Favorable Magic | No | No |
| Azata | High | `60 + 1.5FD` | `SDd6` | `9d6 + 10 + FD` | 75% taken | Favorable Magic | As above; Joy of Life | Favorable Magic | Yes | Yes |
| Azata → Devil | Low | `51 + 1.5FD` | `SDd6` | `9d6 + 6 + FD` | 75% taken | `+10` | Plague of Madness; Incredible Might | Favorable Magic; Hell's Decree | No | No |
| Azata → Devil | Medium | `60 + 1.5FD` | `SDd6` | `9d6 + 6 + FD` | 75% taken | `+17` | Plague of Madness; Promise of Greatness; Incredible Might | Favorable Magic; Hell's Decree; Hell's Authority | No | No |
| Azata → Devil | High | `84 + 1.5FD` | `SDd6` | `11d6 + 6 + FD` | 75% taken | `+24` | As above; Hell's Authority, Angel's Sword form | Favorable Magic; Hell's Decree; Hell's Authority | No | No |
| Azata → Devil | High, eligible targets | `126 + 2.25FD` | `1.5 × SDd6` | `1.5 × (11d6 + 6 + FD)` | 75% taken | `+24` | As above; target-specific 1.5× damage effect | Favorable Magic; Hell's Decree; Hell's Authority | No | No |
| Gold Dragon | Low | `45 + 1.5FD` | `SDd10` | `81 + 1.5FD` | 50% taken | `+1 to +5` | Perfect Soul | Dragon Breath; Dispel Synergy | Yes | Yes |
| Gold Dragon | Medium | `54 + 1.5FD` | `SDd10` | `81 + 1.5FD` | 50% taken | `+1 to +5` | Perfect Soul; Promise of Greatness | Dragon Breath; Dispel Synergy | Yes | Yes |
| Gold Dragon | High | `81 + 2.25(FD + DS)` | `1.5 × SDd10` | `121 + 2.25(FD + DS)` | 50% taken | `0 to +5` | Perfect Soul; Promise of Greatness; Dragon Might; Dragon Smite | Dragon Breath; Dispel Synergy | Yes | Yes |
