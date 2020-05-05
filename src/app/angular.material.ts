import { NgModule } from '@angular/core';

// Form Controls
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Layout
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';

// Buttons
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';

// Popup's & Modals
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule ({
    imports: [
        MatInputModule, MatFormFieldModule, MatCardModule, MatDatepickerModule, MatSlideToggleModule,
        MatCheckboxModule, MatExpansionModule, MatSidenavModule,
        MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatChipsModule, MatRippleModule,
        MatDialogModule, MatTooltipModule
    ],
    exports: [
        MatInputModule, MatFormFieldModule, MatCardModule, MatDatepickerModule, MatSlideToggleModule,
        MatCheckboxModule, MatExpansionModule, MatSidenavModule,
        MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatChipsModule, MatRippleModule,
        MatDialogModule, MatTooltipModule
    ]
})
export class AngularMaterial { }