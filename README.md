# Utils

Basic utilities.

### Installation

#### Using [pully](https://github.com/FabricCore/pully)

```
/pully install utils
```

#### Require as Dependency

```json
{
  "dependencies": {
    "utils": "0.1.0"
  }
}
```

#### Manual Install

1. [Download **utils**](https://github.com/FabricCore/modutils/archive/refs/heads/master.zip).
2. Unzip file content to _.minecraft/config/jscore/modules/utils/_

The folder should look like this

```
.minecraft/config/jscore/
└── modules/
    └── utils/
        └── package.json
```

## Library Functions

#### utils.toRadians(deg: Number) → Number

Convert degrees to radians.

#### utils.toDegrees(rad: Number) → Number

Convert radians to degrees.

#### utils.playerVelocity() → [Vec3d](https://fabriccore.github.io/yarnwrap/build/latest.html?q=util.math.Vec3d)

Returns player velocity in blocks per second.
