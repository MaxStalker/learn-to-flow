import FlowFarm from 0x01

transaction {
  prepare(owner: AuthAccount) {
    let badge <- FlowFarm.mintBadge("Leon")
    owner.save(<-badge, to: /storage/FlowFarmBadge)
    owner.link<&FlowFarm.Badge>(/public/FlowFarmBadge, target: /storage/FlowFarmBadge)
  }
}
