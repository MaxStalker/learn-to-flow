pub contract FlowFarm {

    pub resource Badge {
        pub var name: String

        init(_ name: String){
            self.name = name
        }
    }

    pub fun mintBadge(_ name: String): @Badge{
        return  <- create Badge(name)
    }

    init(){
        log("FlowFarm have been built");
    }
}