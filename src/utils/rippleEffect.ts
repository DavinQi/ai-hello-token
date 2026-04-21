// 优化的烟花特效实现

class RippleEffect {
  private isInitialized: boolean = false;
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private balls: Ball[] = [];
  private longPressed: boolean = false;
  private longPress: number | null = null;
  private multiplier: number = 0;
  private width: number = 0;
  private height: number = 0;
  private origin: { x: number; y: number } = { x: 0, y: 0 };
  private colours: string[] = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];

  constructor() {
  }

  initialize() {
    if (this.isInitialized) return;

    // 创建 canvas 元素
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");

    // 初始化 canvas 上下文
    if (this.canvas.getContext && window.addEventListener) {
      this.ctx = this.canvas.getContext("2d");
      this.updateSize();
      window.addEventListener('resize', this.updateSize.bind(this), false);
      this.loop();

      // 事件监听
      window.addEventListener("mousedown", this.handleMouseDown.bind(this), false);
      window.addEventListener("mouseup", this.handleMouseUp.bind(this), false);
    }

    this.isInitialized = true;
  }

  private updateSize() {
    if (!this.canvas || !this.ctx) return;

    this.canvas.width = window.innerWidth * 2;
    this.canvas.height = window.innerHeight * 2;
    this.canvas.style.width = window.innerWidth + 'px';
    this.canvas.style.height = window.innerHeight + 'px';
    this.ctx.scale(2, 2);
    this.width = (this.canvas.width = window.innerWidth);
    this.height = (this.canvas.height = window.innerHeight);
    this.origin = {
      x: this.width / 2,
      y: this.height / 2
    };
  }

  private handleMouseDown(e: MouseEvent) {
    this.pushBalls(this.randBetween(8, 15), e.clientX, e.clientY);
    document.body.classList.add("is-pressed");
    this.longPress = window.setTimeout(() => {
      document.body.classList.add("is-longpress");
      this.longPressed = true;
    }, 500);
  }

  private handleMouseUp(e: MouseEvent) {
    if (this.longPress) {
      clearInterval(this.longPress);
      this.longPress = null;
    }
    if (this.longPressed == true) {
      document.body.classList.remove("is-longpress");
      this.pushBalls(this.randBetween(20 + Math.ceil(this.multiplier), 40 + Math.ceil(this.multiplier)), e.clientX, e.clientY);
      this.longPressed = false;
    }
    document.body.classList.remove("is-pressed");
  }

  private pushBalls(count: number = 1, x: number = this.origin.x, y: number = this.origin.y) {
    for (let i = 0; i < count; i++) {
      this.balls.push(new Ball(x, y, this.longPressed, this.multiplier, this.colours));
    }
  }

  private randBetween(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

  private loop() {
    if (!this.ctx) return;

    this.ctx.fillStyle = "rgba(255, 255, 255, 0)";
    this.ctx.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
    for (let i = 0; i < this.balls.length; i++) {
      let b = this.balls[i];
      if (b.r < 0) continue;
      this.ctx.fillStyle = b.color;
      this.ctx.beginPath();
      this.ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
      this.ctx.fill();
      b.update();
    }
    if (this.longPressed == true) {
      this.multiplier += 0.2;
    } else if (!this.longPressed && this.multiplier >= 0) {
      this.multiplier -= 0.4;
    }
    this.removeBall();
    requestAnimationFrame(this.loop.bind(this));
  }

  private removeBall() {
    for (let i = 0; i < this.balls.length; i++) {
      let b = this.balls[i];
      if (b.x + b.r < 0 || b.x - b.r > this.width || b.y + b.r < 0 || b.y - b.r > this.height || b.r < 0) {
        this.balls.splice(i, 1);
      }
    }
  }

  // 销毁方法，用于组件卸载时清理
  destroy() {
    if (!this.isInitialized) return;

    // 移除事件监听
    window.removeEventListener("mousedown", this.handleMouseDown.bind(this));
    window.removeEventListener("mouseup", this.handleMouseUp.bind(this));
    window.removeEventListener('resize', this.updateSize.bind(this));

    // 清除定时器
    if (this.longPress) {
      clearInterval(this.longPress);
    }

    // 移除元素
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }

    // 清空数组
    this.balls = [];

    this.isInitialized = false;
  }
}

// 小球类
class Ball {
  x: number;
  y: number;
  angle: number;
  multiplier: number;
  vx: number;
  vy: number;
  r: number;
  color: string;

  constructor(x: number, y: number, longPressed: boolean, multiplier: number, colours: string[]) {
    this.x = x;
    this.y = y;
    this.angle = Math.PI * 2 * Math.random();
    if (longPressed == true) {
      this.multiplier = this.randBetween(8 + multiplier, 10 + multiplier);
    } else {
      this.multiplier = this.randBetween(4, 8);
    }
    this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
    this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
    this.r = this.randBetween(4, 8) + 2 * Math.random();
    this.color = colours[Math.floor(Math.random() * colours.length)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.r -= 0.4;
    this.vx *= 0.85;
    this.vy *= 0.85;
  }

  private randBetween(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }
}

// 导出单例实例
const rippleEffect = new RippleEffect();
export default rippleEffect;