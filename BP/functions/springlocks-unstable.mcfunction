## Springlock - Functions
execute @e[type=player,hasitem={location=slot.armor.legs,item=fb:springlock_suit_legs_d,slot=0,quantity=1}] ~~~ function animation_springlock
execute @e[hasitem=[{item=fb:springlock_suit_chest_d,location=slot.armor.chest},{item=fb:springlock_suit_legs_d,location=slot.armor.legs}]] ~~~ function animation_springlock_legs_chest
execute @e[hasitem=[{item=fb:springlock_suit_chest_d,location=slot.armor.chest},{item=fb:springlock_suit_legs,location=slot.armor.legs}]] ~~~ function animation_springlock_legs_chest
execute @e[hasitem=[{item=fb:springlock_suit_chest,location=slot.armor.chest},{item=fb:springlock_suit_legs_d,location=slot.armor.legs}]] ~~~ function animation_springlock_legs_chest

execute @e[hasitem=[{item=fb:springlock_suit_head_d,location=slot.armor.head},{item=fb:springlock_suit_chest_d,location=slot.armor.chest},{item=fb:springlock_suit_legs_d,location=slot.armor.legs}]] ~~~ effect @s slowness 1 2 true



execute @e[type=player,hasitem={location=slot.armor.legs,item=fb:springlock_suit_legs,slot=0,quantity=1}] ~~~ function animation_springlock
execute @e[hasitem=[{item=fb:springlock_suit_chest,location=slot.armor.chest},{item=fb:springlock_suit_legs,location=slot.armor.legs}]] ~~~ function animation_springlock_legs_chest


execute @e[hasitem=[{item=fb:springlock_suit_head,location=slot.armor.head},{item=fb:springlock_suit_chest,location=slot.armor.chest},{item=fb:springlock_suit_legs,location=slot.armor.legs}]] ~~~ effect @s slowness 1 2 true

##Enabled
execute @e[type=player,hasitem={location=slot.armor.chest,item=fb:springlock_suit_failure_d,quantity=1}] ~~~ function springlock_failure
