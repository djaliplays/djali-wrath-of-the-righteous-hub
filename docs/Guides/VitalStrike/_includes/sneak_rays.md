## Sneak Attack and Rays

Understanding how Sneak Attack interacts with ray spells is relevant when considering an early Rowdy dip on an arcane caster, with or without Arcane Trickster.

In particular, the potential of sneak attacks on **Battering Blast**, which can fire up to seven projectiles.

???+ spell "Battering Blast"
    {% include '_includes/battering_blast.md' %}

### Old Behaviour

Sneak Attack originally applied to every ray of a multi-ray spell. This behaviour was subsequently changed, only to work with some rays bot not others, then eventually adjusted again.

### Current Behaviour

The following observations were tested using **Battering Blast** and **Scorching Ray**, with consistent results for both.

??? spell "Scorching Ray"
    {% include '_includes/scorching_ray.md' %}

* Every attack roll that targets **flat-footed AC**, whether from a weapon attack or a ray spell, is logged as a **Sneak Attack** if the character has Sneak Attack.
* Only the **first ray** deals Sneak Attack damage. Subsequent rays are still treated as Sneak Attacks by the combat log, but no longer receive the extra precision damage.
* This behaviour also applies to other damage riders. Effects such as **Favoured Enemy** and the **+1 damage from Point-Blank Shot** are applied only to the first ray.
* **Bolstered** rays disable all Sneak Attack damage. However, the attacks are still logged as Sneak Attacks and treated as such for other interactions.

### Effects Triggered by Sneak Attacks

Testing produced the following results:

* **Crippling Strike** and **Petrifying Strike** both trigger on all rays, even with **Bolstered** rays. As long as the attack targets flat-footed AC and qualifies as a Sneak Attack, these effects trigger.
* **Dispelling Attack** did **not** trigger from either **Battering Blast** or **Scorching Ray**, including the first ray that still dealt Sneak Attack damage. This differs from previous game versions.

??? class-feature "Crippling Strike"
    {% include '_includes/crippling_strike.md' %}

??? class-feature "Petrifying Strike"
    {% include '_includes/petrifying_strike.md' %}

Obtaining **Arcane Trickster's Surprise Spells** capstone did not alter any of the interactions described above.

??? class-feature "Surprise Spells"
    {% include '_includes/surprise_spells.md' %}


### Other Ray Spells

These results should not be assumed to apply universally.

For example, **Trickster's Ray of Halberds** does apply Sneak Attack damage on every projectile. It may therefore also interact differently with abilities such as **Dispelling Attack**, although further testing is required.

### Sense Vitals

**Sense Vitals** grants Sneak Attack, meaning inherent Sneak Attack progression is not required for these interactions.

As a result, the primary advantage of taking a Rowdy dip on an arcane caster is limited to a smoother early game through **Vital Force**, rather than enabling Sneak Attack itself. As long as the class has **Sense Vitals**, most of the extra Sneak Attack functionality can be obtained without sacrificing a caster level. The Sneak Attack damage itself is equal, or often lower than, the damage provided by Bolster. As a result, investing into additional Sneak Attack dice offers relatively little benefit for ray builds.
