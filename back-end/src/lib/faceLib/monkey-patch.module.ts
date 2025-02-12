import { Global, Module, OnModuleInit } from '@nestjs/common';
import '@tensorflow/tfjs-node';
import * as canvas from 'canvas';
import * as faceapi from 'face-api.js';

@Global()
@Module({})
export class MonkeyPatchModule implements OnModuleInit {
  onModuleInit() {
    const { Canvas, Image, ImageData } = canvas;
    faceapi.env.monkeyPatch({
      Canvas: Canvas as unknown as {
        new (): HTMLCanvasElement;
        prototype: HTMLCanvasElement;
      },
      Image: Image as unknown as {
        new (): HTMLImageElement;
        prototype: HTMLImageElement;
      },
      ImageData: ImageData as unknown as {
        new (sw: number, sh: number): ImageData;
        new (data: Uint8ClampedArray, sw: number, sh?: number): ImageData;
        prototype: ImageData;
      },
    });
    console.log(faceapi.nets);
    console.log('face-api.js monkeyPatch done');
  }
}
