import FlowFarm from 0x01

pub fun main(account: Address): String {
  let name: String = getAccount(account)
    .getCapability(/public/FlowFarmBadge)!
    .borrow<&FlowFarm.Badge>()!
    .name

  log(name)

  return name
}
