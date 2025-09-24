# Effects Documentation

## Liquid Ether Effect

The Liquid Ether effect creates a fluid simulation that responds to mouse/touch interaction.

### Usage

```javascript
const liquidEther = new LiquidEther(container, options);
```

### Parameters

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `colors` | `string[]` | `["#5227FF", "#FF9FFC", "#B19EEF"]` | Array of hex color stops used to build the velocity-to-color palette. |
| `mouseForce` | `number` | `20` | Strength multiplier applied to mouse/touch movement when injecting velocity. |
| `cursorSize` | `number` | `100` | Radius (in pixels at base resolution) of the force brush. |
| `resolution` | `number` | `0.5` | Simulation texture scale relative to canvas size (lower = better performance, more blur). |
| `dt` | `number` | `0.014` | Fixed simulation timestep used inside the advection/diffusion passes. |
| `BFECC` | `boolean` | `true` | Enable BFECC advection (error-compensated) for crisper flow; disable for slight performance gain. |
| `isViscous` | `boolean` | `false` | Toggle iterative viscosity solve (smoother, thicker motion when enabled). |
| `viscous` | `number` | `30` | Viscosity coefficient used when isViscous is true. |
| `iterationsViscous` | `number` | `32` | Number of Gauss-Seidel iterations for viscosity (higher = smoother, slower). |
| `iterationsPoisson` | `number` | `32` | Number of pressure Poisson iterations to enforce incompressibility. |
| `isBounce` | `boolean` | `false` | If true, shows bounce boundaries (velocity clamped at edges). |
| `autoDemo` | `boolean` | `true` | Enable idle auto-driving of the pointer when no user interaction. |
| `autoSpeed` | `number` | `0.5` | Speed (normalized units/sec) for auto pointer motion. |
| `autoIntensity` | `number` | `2.2` | Multiplier applied to velocity delta while in auto mode. |
| `takeoverDuration` | `number` | `0.25` | Seconds to interpolate from auto pointer to real cursor when user moves mouse. |
| `autoResumeDelay` | `number` | `1000` | Milliseconds of inactivity before auto mode resumes. |
| `autoRampDuration` | `number` | `0.6` | Seconds to ramp auto movement speed from 0 to full after activation. |
| `className` | `string` | `''` | Optional class for the root container. |
| `style` | `object` | `{}` | Inline styles applied to the root container. |

## Gooey Nav Effect

The Gooey Nav effect creates animated particle transitions between navigation items.

### Usage

```javascript
const gooeyNav = new GooeyNav(container, options);
```

### Parameters

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animationTime` | `number` | `600` | Duration (ms) of the main animation. |
| `particleCount` | `number` | `15` | Number of bubble particles per transition. |
| `particleDistances` | `[number, number]` | `[90, 10]` | Outer and inner distances of bubble spread. |
| `particleR` | `number` | `100` | Radius factor influencing random particle rotation. |
| `timeVariance` | `number` | `300` | Random time variance (ms) for particle animations. |
| `colors` | `number[]` | `[1, 2, 3, 1, 2, 3, 1, 4]` | Color indices used when creating bubble particles. |
| `initialActiveIndex` | `number` | `0` | Which item is selected on mount. |

Note: In the vanilla JavaScript implementation, navigation items are read from the HTML structure rather than passed as an `items` parameter.
