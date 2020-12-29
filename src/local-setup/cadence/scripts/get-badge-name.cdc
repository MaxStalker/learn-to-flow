import FlowFarm from 0x01

pub fun main(): String {
  let name: String = getAccount(0x02)
    .getCapability(/public/FlowFarmBadge)!
    .borrow<&FlowFarm.Badge>()!
    .name

  log(name)

  return name
}
