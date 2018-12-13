import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { NewPostComponent } from 'app/new-post/new-post.component';
import { PostsComponent } from 'app/posts/posts.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'posts',
        component: PostsComponent,
        children: [
            {
                path: 'new-post',
                component: NewPostComponent
            },
            {
                path: 'list',
                component: TableListComponent
            },
            {
                path: '**',
                redirectTo: 'list',
                pathMatch: 'full',
            },
        ]
    },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
