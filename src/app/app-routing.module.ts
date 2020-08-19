import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/folder',
    pathMatch: 'full'
  },
  
  {
    path: 'folder/folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'regester',
    loadChildren: () => import('./regester/regester.module').then( m => m.RegesterPageModule)
  },
  {
    path: 'singalnews/:id',
    loadChildren: () => import('./singalnews/singalnews.module').then( m => m.SingalnewsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'cardpost',
    loadChildren: () => import('./cardpost/cardpost.module').then( m => m.CardpostPageModule)
  },
  {
    path: 'bookmark',
    loadChildren: () => import('./bookmark/bookmark.module').then( m => m.BookmarkPageModule)
  },
  {
    path: 'catpage/:id',
    loadChildren: () => import('./catpage/catpage.module').then( m => m.CatpagePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
