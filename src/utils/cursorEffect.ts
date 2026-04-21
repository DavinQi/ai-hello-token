// 鼠标特效实现

class CursorEffect {
  private cursor: HTMLElement;
  private cursorFollower: HTMLElement;
  private isInitialized: boolean = false;

  constructor() {
    this.cursor = document.createElement('div');
    this.cursor.classList.add('cursor');
    
    this.cursorFollower = document.createElement('div');
    this.cursorFollower.classList.add('cursor-follower');
  }

  initialize() {
    if (this.isInitialized) return;

    document.body.appendChild(this.cursor);
    document.body.appendChild(this.cursorFollower);

    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    document.addEventListener('mousedown', this.handleMouseDown.bind(this));
    document.addEventListener('mouseup', this.handleMouseUp.bind(this));
    document.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
    document.addEventListener('mouseleave', this.handleMouseLeave.bind(this));

    // 为可交互元素添加鼠标悬停效果
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', this.handleInteractiveEnter.bind(this));
      element.addEventListener('mouseleave', this.handleInteractiveLeave.bind(this));
    });

    this.isInitialized = true;
  }

  private handleMouseMove(e: MouseEvent) {
    const { clientX, clientY } = e;

    // 主光标跟随
    this.cursor.style.left = `${clientX - 10}px`;
    this.cursor.style.top = `${clientY - 10}px`;

    // 跟随光标延迟跟随
    setTimeout(() => {
      this.cursorFollower.style.left = `${clientX - 20}px`;
      this.cursorFollower.style.top = `${clientY - 20}px`;
    }, 100);
  }

  private handleMouseDown() {
    this.cursor.style.transform = 'scale(0.8)';
    this.cursorFollower.style.transform = 'scale(1.2)';
  }

  private handleMouseUp() {
    this.cursor.style.transform = 'scale(1)';
    this.cursorFollower.style.transform = 'scale(1)';
  }

  private handleMouseEnter() {
    this.cursor.style.opacity = '1';
    this.cursorFollower.style.opacity = '1';
  }

  private handleMouseLeave() {
    this.cursor.style.opacity = '0';
    this.cursorFollower.style.opacity = '0';
  }

  private handleInteractiveEnter() {
    this.cursor.style.transform = 'scale(1.2)';
    this.cursorFollower.style.transform = 'scale(0.8)';
  }

  private handleInteractiveLeave() {
    this.cursor.style.transform = 'scale(1)';
    this.cursorFollower.style.transform = 'scale(1)';
  }

  // 销毁方法，用于组件卸载时清理
  destroy() {
    if (!this.isInitialized) return;

    document.removeEventListener('mousemove', this.handleMouseMove.bind(this));
    document.removeEventListener('mousedown', this.handleMouseDown.bind(this));
    document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
    document.removeEventListener('mouseenter', this.handleMouseEnter.bind(this));
    document.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));

    if (this.cursor.parentNode) {
      this.cursor.parentNode.removeChild(this.cursor);
    }

    if (this.cursorFollower.parentNode) {
      this.cursorFollower.parentNode.removeChild(this.cursorFollower);
    }

    this.isInitialized = false;
  }
}

// 导出单例实例
const cursorEffect = new CursorEffect();
export default cursorEffect;