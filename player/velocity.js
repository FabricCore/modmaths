utils.playerVelocity = () => {
    let Vec3d = Packages.yarnwrap.util.math.Vec3d;

    let tX = pEntity.x - pEntity.prevX();
    let tY = pEntity.y - pEntity.prevY();
    let tZ = pEntity.z - pEntity.prevZ();

    tX *= 20;
    tY *= 20;
    tZ *= 20;

    return new Vec3d(tX, tY, tZ);
};
