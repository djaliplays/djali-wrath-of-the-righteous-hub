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

Energy conversion and physical damage bypass are separate flags; energy conversion also covers incorporeal targets, while Demon can bypass physical damage reduction without energy conversion. Green ticks indicate availability; red crosses indicate that the feature is unavailable. 

Conversion to Energy also enables further conversion to an [Element](#elemental-conversion). This allows the character to benefit from:

- Flame Curse: another 1.5x multiplier on trap damage
- Call of the Fiery Things: 4d6 damage on each trap cast (36 for Gold Dragon)
- Elemental Barrage: Mythic Level x d6 damage when procced


[See the full calculations, assumptions and feature descriptions](#mythic-damage-calculations).

### No mythic path

<div class="cf-table" markdown>

| Path | Tier | Trap | Surprise Spells | Geomancy | Mythic DC | Energy conversion | DR / Incorporeal | Damage setup | DC setup |
| --- | --- | ---: | ---: | ---: | --- | ---: | ---: | --- | --- |
| No mythic path | Low | `36 + 1.5FD` | `SDd6` | <span class="cf-dim">`Gd6 + FD`</span> | — | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness | — |
| No mythic path | Medium | `45 + 1.5FD` | `SDd6` | <span class="cf-dim">`Gd6 + FD`</span> | — | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness | — |

</div>

### Mythic Rank 3

<div class="cf-table" markdown>

| Path | Tier | Trap | Surprise Spells | Geomancy | Mythic DC | Energy conversion | DR / Incorporeal | Damage setup | DC setup |
| --- | --- | ---: | ---: | ---: | --- | ---: | ---: | --- | --- |
| Angel | Low | `36 + 1.5FD` | `SDd6` | <span class="cf-dim">`Gd6 + FD`</span> | — | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness | — |
| Angel | Medium | `45 + 1.5FD` | `SDd6` | <span class="cf-dim">`Gd6 + FD`</span> | — | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness | — |
| Angel | High | `69 + 1.5FD` | `SDd6` | <span class="cf-dim">`(G + 2)d6 + FD`</span> | — | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness; Sword of Heaven | — |
| <span class="cf-gap"></span> |  |  |  |  |  |  |  |  |  |
| Lich | Low | `36 + 1.5FD` | `SDd6` | `Gd6 + FD` | — | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | Plague of Madness; Death of Elements | — |
| Lich | Medium | `45 + 1.5FD` | `SDd6` | `Gd6 + FD` | — | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | Plague of Madness; Promise of Greatness; Death of Elements | — |
| <span class="cf-gap"></span> |  |  |  |  |  |  |  |  |  |
| Demon | Low | `36 + 1.5FD` | `SDd6` | <span class="cf-dim">`Gd6 + FD`</span> | — | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness | — |
| Demon | Medium | `45 + 1.5FD` | `SDd6` | <span class="cf-dim">`Gd6 + FD`</span> | `+2` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness | Demonic Rage |
| Demon | High | `45 + 1.5FD` | `SDd6` | <span class="cf-dim">`Gd6 + FD`</span> | `+4` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness | Demonic Rage; double application to buff and trap |
| <span class="cf-gap"></span> |  |  |  |  |  |  |  |  |  |
| Azata | Low | `36 + 1.5FD` | `SDd6` | <span class="cf-dim">`Gd6 + FD`</span> | — | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness | — |
| Azata | Medium | `45 + 1.5FD` | `SDd6` | <span class="cf-dim">`Gd6 + FD`</span> | — | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness | — |

</div>

### Mythic Rank 6

<div class="cf-table" markdown>

| Path | Tier | Trap | Surprise Spells | Geomancy | Mythic DC | Energy conversion | DR / Incorporeal | Damage setup | DC setup |
| --- | --- | ---: | ---: | ---: | --- | ---: | ---: | --- | --- |
| Angel | Low | `36 + 1.5FD` | `SDd6` | `9d6 + FD` | `+2` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness | — |
| Angel | Medium | `93 + 1.5FD` | `SDd6` | `13d6 + FD` | `+2` | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | Plague of Madness; Promise of Greatness; Sword of Heaven; Bound of Possibility | Piercing Rays |
| Angel | Medium, eligible targets | `139.5 + 2.25FD` | `1.5 × SDd6` | `1.5 × (13d6 + FD)` | `+2` | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | As above; Abolish Guile | Piercing Rays |
| <span class="cf-gap"></span> |  |  |  |  |  |  |  |  |  |
| Lich | Low | `45 + 1.5FD` | `SDd6` | `9d6 + FD` | — | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | Plague of Madness; Death of Elements; Fear Control | — |
| Lich | Medium | `54 + 1.5FD` | `SDd6` | `9d6 + FD` | — | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | Plague of Madness; Promise of Greatness; Death of Elements; Fear Control | — |
| <span class="cf-gap"></span> |  |  |  |  |  |  |  |  |  |
| Demon | Low | `36 + 1.5FD` | `SDd6` | `9d6 + FD` | `+2` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness | Shadow Demon or Coloxus |
| Demon | Medium | `45 + 1.5FD` | `SDd6` | `9d6 + FD` | `+7` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness | Demonic Rage; Incubus; Shadow Demon or Coloxus |
| Demon | High, Babau + Vrock | `45 + 1.5FD` | `(SD + 3)d6` | `9d6 + FD` | `+12` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness; buff prepared with Incubus, then Babau + Vrock | Incubus buff; Demonic Rage; Vrock; Major Aspect |
| Demon | High, Incubus + Vrock | `45 + 1.5FD` | `SDd6` | `9d6 + FD` | `+14` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness | Demonic Rage; Incubus buff; Vrock; Major Aspect |
| <span class="cf-gap"></span> |  |  |  |  |  |  |  |  |  |
| Azata | Low | `45 + 1.5FD` | `SDd6` | `9d6 + 6 + FD` | Favorable Magic | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Incredible Might | Favorable Magic |
| Azata | Medium | `54 + 1.5FD` | `SDd6` | `9d6 + 6 + FD` | Favorable Magic | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness; Incredible Might | Favorable Magic |

</div>

### Mythic Rank 10

<div class="cf-table" markdown>

| Path | Tier | Trap | Surprise Spells | Geomancy | Mythic DC | Energy conversion | DR / Incorporeal | Damage setup | DC setup |
| --- | --- | ---: | ---: | ---: | --- | ---: | ---: | --- | --- |
| Angel | Low | `36 + 1.5FD` | `SDd6` | `9d6 + FD` | `+3` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness | — |
| Angel | Medium | `93 + 1.5FD` | `SDd6` | `13d6 + FD` | `+3` | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | Plague of Madness; Promise of Greatness; Sword of Heaven; Bound of Possibility | Piercing Rays |
| Angel | Medium, eligible targets | `139.5 + 2.25FD` | `1.5 × SDd6` | `1.5 × (13d6 + FD)` | `+3` | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | As above; choose the relevant Abolish upgrade | Piercing Rays |
| <span class="cf-gap"></span> |  |  |  |  |  |  |  |  |  |
| Lich | Low | `51 + 1.5FD` | `SDd6` | `9d6 + FD` | — | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | Plague of Madness; Death of Elements; Fear Control | — |
| Lich | Medium | `60 + 1.5FD` | `SDd6` | `9d6 + FD` | — | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | Plague of Madness; Promise of Greatness; Death of Elements; Fear Control | — |
| Lich | High | `90 + 2.25FD` | `1.5 × SDd6` | `1.5 × (9d6 + FD) + 2d8 + 10` | — | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | Plague of Madness; Promise of Greatness; Death of Elements; Fear Control; Eclipse Chill | — |
| <span class="cf-gap"></span> |  |  |  |  |  |  |  |  |  |
| Demon | Low | `36 + 1.5FD` | `SDd6` | `9d6 + FD` | `+3` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness | Shadow Demon or Coloxus |
| Demon | Medium | `45 + 1.5FD` | `SDd6` | `9d6 + FD` | `+10` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness | Demonic Rage; Incubus; Shadow Demon or Coloxus |
| Demon | High, Babau + Vrock | `45 + 1.5FD` | `(SD + 4)d6` | `9d6 + FD` | `+17` | <span class="cf-no">✗</span> | <span class="cf-yes">✓</span> | Plague of Madness; Promise of Greatness; buff prepared with Incubus, then Babau + Vrock | Incubus buff; Demonic Rage; Vrock; Major Aspect |
| Demon | High, Incubus + Vrock | `45 + 1.5FD` | `SDd6` | `9d6 + FD` | `+20` | <span class="cf-no">✗</span> | <span class="cf-yes">✓</span> | Plague of Madness; Promise of Greatness | Demonic Rage; Incubus; Vrock; Major Aspect |
| <span class="cf-gap"></span> |  |  |  |  |  |  |  |  |  |
| Azata | Low | `51 + 1.5FD` | `SDd6` | `9d6 + 10 + FD` | Favorable Magic | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Incredible Might | Favorable Magic |
| Azata | Medium | `60 + 1.5FD` | `SDd6` | `9d6 + 10 + FD` | Favorable Magic | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness; Incredible Might | Favorable Magic |
| Azata | High | `60 + 1.5FD` | `SDd6` | `9d6 + 10 + FD` | Favorable Magic | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | As above; Joy of Life | Favorable Magic |
| <span class="cf-gap"></span> |  |  |  |  |  |  |  |  |  |
| Azata → Devil | Low | `51 + 1.5FD` | `SDd6` | `9d6 + 6 + FD` | `+10` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Incredible Might | Favorable Magic; Hell's Decree |
| Azata → Devil | Medium | `60 + 1.5FD` | `SDd6` | `9d6 + 6 + FD` | `+17` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | Plague of Madness; Promise of Greatness; Incredible Might | Favorable Magic; Hell's Decree; Hell's Authority |
| Azata → Devil | High | `84 + 1.5FD` | `SDd6` | `11d6 + 6 + FD` | `+24` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | As above; Hell's Authority, Angel's Sword form | Favorable Magic; Hell's Decree; Hell's Authority |
| Azata → Devil | High, eligible targets | `126 + 2.25FD` | `1.5 × SDd6` | `1.5 × (11d6 + 6 + FD)` | `+24` | <span class="cf-no">✗</span> | <span class="cf-no">✗</span> | As above; target-specific 1.5× damage effect | Favorable Magic; Hell's Decree; Hell's Authority |
| <span class="cf-gap"></span> |  |  |  |  |  |  |  |  |  |
| Gold Dragon | Low | `45 + 1.5FD` | `SDd10` | `81 + 1.5FD` | `+1 to +4` | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | Perfect Soul | Dragon Breath; Dispel Synergy |
| Gold Dragon | Medium | `54 + 1.5FD` | `SDd10` | `81 + 1.5FD` | `+1 to +4` | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | Perfect Soul; Promise of Greatness | Dragon Breath; Dispel Synergy |
| Gold Dragon | High | `81 + 2.25(FD + DS)` | `1.5 × SDd10` | `121 + 2.25(FD + DS)` | `0 to +4` | <span class="cf-yes">✓</span> | <span class="cf-yes">✓</span> | Perfect Soul; Promise of Greatness; Dragon Might; Dragon Smite | Dragon Breath; Dispel Synergy |

</div>
