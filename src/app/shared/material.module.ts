import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from  '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";



@NgModule({
    exports: [
        MatButtonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatToolbarModule,
        MatGridListModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatTooltipModule,
        MatOptionModule,
        MatSelectModule
    ]
})

export class MaterialModule {}