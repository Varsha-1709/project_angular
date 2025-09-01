import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Categories } from "./components/categories/categories";
import { Carousel } from "./components/carousel/carousel";
import { Body } from "./components/body/body";
import { Footer } from "./components/footer/footer";
import { Tablecard } from "./components/tablecard/tablecard";
import 'zone.js';

@Component({
  selector: 'app-root',
  imports: [Navbar, Body, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project_angular');
}
