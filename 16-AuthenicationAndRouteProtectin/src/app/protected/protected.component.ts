import { Component } from "@angular/core";

@Component({
    template: `
        <h1>Protected - you shouldn't be here if not signed in</h1>
    `
})
export class ProtectedComponent {
}