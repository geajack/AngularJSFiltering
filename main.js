const app = angular.module("app", []);

class RootController
{
    constructor()
    {
        this.indices = [...Array(1000).keys()];
    }
}

class ComponentController
{
    constructor()
    {
    }

    getMessage()
    {
        var startTime = Date.now();
        while (Date.now() < startTime + 1) {}
        return this.index;
    }
}

app.controller("RootController", RootController);
app.component("component",
    {
        controller: ComponentController,
        controllerAs: "vm",
        template: `
            {{vm.getMessage()}}
        `,
        bindings: {
            index: "<"
        }
    }
);