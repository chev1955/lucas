---
layout: post
title: "Residential cooling and heating load calculations"
tags: ASHRAE
---

#### Residential features

The following unique features distinguish residences from other types of buildings:

- Smaller internal heat gains
- Varied use of spaces
- Fewer zones
- Greater distribution losses
- Partial loads
- Dehumidification issues
- Single-family detached vs. Multifamily

<!-- more -->

---

#### Design conditions

The initial step in the load calculation is selecting indoor and outdoor design conditions.

_Indoor Conditions_

- Cooling: `24°C db` and a maximum of `50 to 65% rh`.
- Heating: `20°C db` and `30% rh`.

_Outdoor Conditions_

- Cooling: `1%` design dry-bulb temperature and mean coincident wet bulb temperature; `3.4 m/s` wind speed; hottest-month dry-bulb temperature daily range.
- Heating: `99%` design dry-bulb temperature.

---

#### Cooling Load

_Sensible cooling load:_

1. Exterior opaque surfaces
2. Exterior transparent fenestration surfaces
3. Partitions to unconditioned buffer space
4. Ventilation/infiltration
5. Occupants and appliances
6. Distribution

_Latent cooling load:_

1. Ventilation/infiltration
2. Internal gain (occupants, cooking, laundry, and bathing)

---

#### Heating Load

Heating calculations use simple worst-case assumptions, ignoring solar and internal gains, and building heat storage. With these simplifications, the heating problem is reduced to a basic `UAΔt` calculation.

1. Exterior surfaces above grade
2. Partitions to unconditioned buffer space
3. Walls below grade
4. Floors on grade
5. Floors below grade
6. Ventilation/infiltration


