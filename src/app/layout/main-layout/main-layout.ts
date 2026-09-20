import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Footer, RouterOutlet, Hero],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
