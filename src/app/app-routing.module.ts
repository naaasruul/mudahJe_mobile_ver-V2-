import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'firstpage',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: 'pilih-perbualan',
    loadChildren: () => import('./pilih-perbualan/pilih-perbualan.module').then(m => m.PilihPerbualanPageModule)
  },
  {
    path: 'mahu-belajar',
    loadChildren: () => import('./mahu-belajar/mahu-belajar.module').then(m => m.MahuBelajarPageModule)
  },
  {
    path: 'firstpage',
    loadChildren: () => import('./firstpage/firstpage.module').then(m => m.FirstpagePageModule)
  },
  {
    path: 'searchpage',
    loadChildren: () => import('./searchpage/searchpage.module').then(m => m.SearchpagePageModule)
  },
  {
    path: 'selected-item-page',
    loadChildren: () => import('./selected-item-page/selected-item-page.module').then(m => m.SelectedItemPagePageModule)
  },
  {
    path: 'choose-activity/:activityId',
    loadChildren: () => import('./choose-activity/choose-activity.module').then(m => m.ChooseActivityPageModule)
  },
  {
    path: 'notes/:activityId',
    loadChildren: () => import('./activity/notes/notes.module').then(m => m.NotesPageModule)
  },
  {
    path: 'exercise/:activityId',
    loadChildren: () => import('./activity/exercise/exercise.module').then(m => m.ExercisePageModule)
  },
  {
    path: 'exercise/:activityId/content/:contentId',
    loadChildren: () => import('./activity/exercise/content/content.module').then(m => m.ContentPageModule)
  },
  {
    path: 'notes/:activityId/content/:contentId',
    loadChildren: () => import('./activity/notes/content/content.module').then(m => m.ContentPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
