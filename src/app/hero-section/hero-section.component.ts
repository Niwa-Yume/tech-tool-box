import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('techObject') private techObjectRef!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private laptop!: THREE.Group;
  private isOpen = false;

  ngAfterViewInit() {
    this.initThreeJs();
    this.animate();
    this.setupEventListeners();
  }

  private initThreeJs() {
    const canvasContainer = this.techObjectRef.nativeElement;
    
    // Create scene
    this.scene = new THREE.Scene();

    // Set up camera
    this.camera = new THREE.PerspectiveCamera(75, 600 / 450, 0.1, 1000);
    this.camera.position.z = 2;

    // Set up renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(600, 450);
    canvasContainer.appendChild(this.renderer.domElement);

    // Create 3D laptop object
    this.laptop = this.createLaptop();
    this.scene.add(this.laptop);

    // Add lighting
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 5, 5);
    this.scene.add(light);
  }

  private createLaptop(): THREE.Group {
    const laptop = new THREE.Group();

    // Base
    const baseGeometry = new THREE.BoxGeometry(1.5, 0.08, 1.2);
    const baseMaterial = new THREE.MeshPhongMaterial({ color: 0x6c5ce7 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    laptop.add(base);

    // Screen
    const screenGeometry = new THREE.BoxGeometry(1.45, 0.9, 0.03);
    const screenMaterial = new THREE.MeshPhongMaterial({ color: 0x2d3436 });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 0.49, -0.585);
    laptop.add(screen);

    // Screen display
    const displayGeometry = new THREE.PlaneGeometry(1.35, 0.82);
    const displayMaterial = new THREE.MeshBasicMaterial({ color: 0x00cec9 });
    const display = new THREE.Mesh(displayGeometry, displayMaterial);
    display.position.set(0, 0.49, -0.568);
    laptop.add(display);

    // Keyboard
    const keyboardGeometry = new THREE.PlaneGeometry(1.35, 0.6);
    const keyboardMaterial = new THREE.MeshPhongMaterial({ color: 0xa29bfe });
    const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
    keyboard.rotation.x = -Math.PI / 2;
    keyboard.position.set(0, 0.041, 0.3);
    laptop.add(keyboard);

    return laptop;
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    
    // Rotate the laptop model
    this.laptop.rotation.y += 0.005;
    
    this.renderer.render(this.scene, this.camera);
  }

  private setupEventListeners() {
    this.techObjectRef.nativeElement.addEventListener('click', () => {
      if (!this.isOpen) {
        gsap.to(this.laptop.rotation, { x: -Math.PI / 6, duration: 1 });
        gsap.to(this.laptop.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 1 });
        this.isOpen = true;
      } else {
        gsap.to(this.laptop.rotation, { x: 0, duration: 1 });
        gsap.to(this.laptop.scale, { x: 1, y: 1, z: 1, duration: 1 });
        this.isOpen = false;
      }
    });

    window.addEventListener('resize', () => this.onWindowResize());
    this.onWindowResize(); // Initial resize
  }

  private onWindowResize() {
    const containerWidth = Math.min(600, window.innerWidth * 0.9);
    const containerHeight = containerWidth * 0.75;
    
    this.techObjectRef.nativeElement.style.width = `${containerWidth}px`;
    this.techObjectRef.nativeElement.style.height = `${containerHeight}px`;
    
    this.renderer.setSize(containerWidth, containerHeight);
    this.camera.aspect = containerWidth / containerHeight;
    this.camera.updateProjectionMatrix();
  }
}
