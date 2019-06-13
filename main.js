const app = angular.module("app", []);

class RootController
{
    constructor()
    {
        this.indices = [...Array(1000).keys()].map(i => {return {index: i}});
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

    style()
    {
        var match = String(this.index).includes(this.search);
        if(match || !this.search)
        {
            return {};
        }
        else
        {            
            return { display: "none" };
        }
    }
}

app.controller("RootController", RootController);
app.component("component",
    {
        controller: ComponentController,
        controllerAs: "vm",
        template: `
            <span ng-style="vm.style()">{{::vm.getMessage()}}</span>
        `,
        bindings: {
            index: "<",
            search: "<"
        }
    }
);