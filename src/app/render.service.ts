import { Injectable ,Renderer2 , RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenderService {
  public r: Renderer2;
  constructor(
    public renderer:RendererFactory2
  ) {
    this.r = renderer.createRenderer(null, null);
  }

  $(_element:any):any{
    this.r.setStyle(_element,'border','1px solid #FF0000');
  }

}
