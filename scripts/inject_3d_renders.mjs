import { readFileSync, writeFileSync } from 'fs';

const path = String.raw`C:/Users/Admin/Documents/GitHub/steez/demo cards/electronics_demo2/index.html`;
let html = readFileSync(path, 'utf-8');

// Increase vis height for better 3D render proportions
html = html.replace('.pc-vis{height:170px;', '.pc-vis{height:200px;');

const script = `
<script>
(function () {
  'use strict';

  // ── material helper ────────────────────────────────────────────────────────
  function mat(hex, opts) {
    var o = Object.assign({ metal: 0.08, rough: 0.5 }, opts || {});
    var m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(hex),
      metalness: o.metal,
      roughness: o.rough
    });
    if (o.emissive) {
      m.emissive = new THREE.Color(o.emissive);
      m.emissiveIntensity = o.emissiveInt || 0.7;
    }
    return m;
  }




  // ── PRODUCT BUILDERS ───────────────────────────────────────────────────────

  var BLUE    = 0x1652F0;
  var DKBLUE  = 0x0A3ED4;
  var GOLD    = 0xE8A820;
  var MINT    = 0x0A9E6A;
  var DARK    = 0x040A18;
  var SILVER  = 0xC0C8D8;
  var WHITE   = 0xFAFAFA;

  // 1. Hair Dryer ─────────────────────────────────────────────────────────────
  function buildHairDryer(g) {
    var body  = mat(BLUE,   { metal: 0.14, rough: 0.38 });
    var dark  = mat(DARK,   { metal: 0.35, rough: 0.45 });
    var gold  = mat(GOLD,   { metal: 0.2,  rough: 0.3 });
    var led   = mat(MINT,   { emissive: MINT, emissiveInt: 0.9 });

    // Main barrel (horizontal cylinder)
    var barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.56, 3.0, 40), body);
    barrel.rotation.z = Math.PI / 2;
    barrel.castShadow = true;
    g.add(barrel);

    // Rear vent end cap
    var cap = new THREE.Mesh(new THREE.CylinderGeometry(0.57, 0.57, 0.14, 40), dark);
    cap.rotation.z = Math.PI / 2;
    cap.position.x = 1.58;
    g.add(cap);

    // Vent grill holes (dark discs on cap face)
    var holePos = [[ 0, 0.25],[ 0,-0.25],[ 0.25, 0],[-0.25, 0],[0.18, 0.18],[-0.18, 0.18],[0.18,-0.18],[-0.18,-0.18]];
    holePos.forEach(function(p) {
      var h = new THREE.Mesh(new THREE.CircleGeometry(0.06, 12), dark);
      h.rotation.y = Math.PI / 2;
      h.position.set(1.66, p[1], p[0]);
      g.add(h);
    });

    // Nozzle / concentrator at front
    var nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.48, 0.75, 24), dark);
    nozzle.rotation.z = Math.PI / 2;
    nozzle.position.x = -1.88;
    g.add(nozzle);

    // Nozzle lip
    var lip = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.04, 8, 32), dark);
    lip.rotation.x = Math.PI / 2;
    lip.position.x = -2.26;
    g.add(lip);

    // Handle (angled cylinder)
    var handle = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.22, 1.65, 28), body);
    handle.position.set(0.55, -1.05, 0);
    handle.rotation.z = 0.15;
    handle.castShadow = true;
    g.add(handle);

    // Handle bottom cap
    var hcap = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.1, 20), dark);
    hcap.position.set(0.68, -1.88, 0);
    hcap.rotation.z = 0.15;
    g.add(hcap);

    // Speed/heat dial on barrel underside
    var dial = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.09, 0.26), mat(DKBLUE, {metal:0.1, rough:0.5}));
    dial.position.set(0.0, -0.58, 0);
    g.add(dial);

    // Control indicator
    var ind = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.1, 12), gold);
    ind.rotation.x = Math.PI / 2;
    ind.position.set(-0.18, -0.58, 0.28);
    g.add(ind);

    // Status LED
    var ledM = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), led);
    ledM.position.set(0.55, -1.56, 0.24);
    g.add(ledM);

    g.position.y = -0.15;
    g.rotation.x = 0.18;
  }

  // 2. Massage Gun ────────────────────────────────────────────────────────────
  function buildMassageGun(g) {
    var body = mat(DKBLUE, { metal: 0.18, rough: 0.35 });
    var dark = mat(DARK,   { metal: 0.4,  rough: 0.45 });
    var gold = mat(GOLD,   { metal: 0.25, rough: 0.28 });
    var foam = mat(0xD4C8B8, { metal: 0, rough: 0.92 });
    var led  = mat(MINT,   { emissive: MINT, emissiveInt: 0.9 });

    // Motor housing
    var motor = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 2.6, 44), body);
    motor.rotation.z = Math.PI / 2;
    motor.castShadow = true;
    g.add(motor);

    // Motor end cap
    var mcap = new THREE.Mesh(new THREE.CylinderGeometry(0.73, 0.73, 0.16, 44), dark);
    mcap.rotation.z = Math.PI / 2;
    mcap.position.x = 1.4;
    g.add(mcap);

    // Speed ring
    var ring = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.09, 10, 40), gold);
    ring.position.set(0.8, 0.74, 0);
    g.add(ring);

    // Speed indicator dots
    for (var i = 0; i < 3; i++) {
      var lm = i < 2 ? led : mat(0x1a2a3a, {rough:0.8});
      var dot = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), lm);
      dot.position.set(-0.24 + i * 0.24, 0.74, 0.74);
      g.add(dot);
    }

    // Attachment neck
    var neck = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.55, 24), dark);
    neck.rotation.z = Math.PI / 2;
    neck.position.x = -1.6;
    g.add(neck);

    // Foam ball head
    var ball = new THREE.Mesh(new THREE.SphereGeometry(0.56, 32, 32), foam);
    ball.position.x = -2.4;
    ball.castShadow = true;
    g.add(ball);

    // Handle
    var handle = new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.26, 2.0, 32), body);
    handle.position.y = -1.5;
    handle.castShadow = true;
    g.add(handle);

    var hcap = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.14, 24), dark);
    hcap.position.y = -2.57;
    g.add(hcap);

    // Power button
    var btn = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.1, 20), gold);
    btn.rotation.x = Math.PI / 2;
    btn.position.set(0, -2.52, 0.3);
    g.add(btn);

    g.position.y = 0.5;
    g.rotation.x = 0.15;
  }

  // 3. Beauty Instrument ──────────────────────────────────────────────────────
  function buildBeautyInstrument(g) {
    var rose  = mat(0xC8A8B0, { metal: 0.38, rough: 0.24 });
    var gold  = mat(GOLD,    { metal: 0.45, rough: 0.18 });
    var glow  = mat(0xFFD888, { metal: 0.1,  rough: 0.4, emissive: 0xFFAA20, emissiveInt: 0.55 });
    var dark  = mat(DARK,    { metal: 0.5,   rough: 0.4 });
    var led   = mat(MINT,    { emissive: MINT, emissiveInt: 1.0 });

    // Slim handle
    var handle = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.25, 2.9, 36), rose);
    handle.castShadow = true;
    g.add(handle);

    // Handle bottom cap
    var hcap = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.1, 24), dark);
    hcap.position.y = -1.5;
    g.add(hcap);

    // Transition neck
    var neck = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.29, 0.32, 28), rose);
    neck.position.y = 1.61;
    g.add(neck);

    // Outer treatment ring (gold)
    var outerR = new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.13, 16, 64), gold);
    outerR.position.y = 1.95;
    g.add(outerR);

    // Treatment head disc (glowing)
    var head = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.68, 0.16, 48), glow);
    head.position.y = 1.95;
    g.add(head);

    // Inner emitter rings
    var e1 = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.055, 10, 48), gold);
    e1.position.y = 2.04;
    g.add(e1);

    var e2 = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.045, 8, 40), gold);
    e2.position.y = 2.04;
    g.add(e2);

    // Centre emitter dot
    var core = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.06, 20), mat(0xFFDD60, {emissive:0xFFCC00, emissiveInt:1.2}));
    core.position.y = 2.04;
    g.add(core);

    // LED mode indicators on handle side
    [0xE8A820, MINT, BLUE].forEach(function(c, i) {
      var l = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.07, 10), mat(c, {emissive:c, emissiveInt:0.9}));
      l.rotation.x = Math.PI / 2;
      l.position.set(0.3, -0.4 + i * 0.26, 0);
      g.add(l);
    });

    // Power button
    var pbtn = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.09, 20), gold);
    pbtn.rotation.x = Math.PI / 2;
    pbtn.position.set(0.3, 0.28, 0);
    g.add(pbtn);

    g.position.y = -0.3;
    g.rotation.x = 0.08;
  }

  // 4. Blender ────────────────────────────────────────────────────────────────
  function buildBlender(g) {
    var body   = mat(BLUE,     { metal: 0.2,  rough: 0.4 });
    var glass  = mat(0xC8E0FF, { metal: 0.0,  rough: 0.05 });
    var dark   = mat(DARK,     { metal: 0.35, rough: 0.5 });
    var silver = mat(SILVER,   { metal: 0.82, rough: 0.18 });

    // Motor base
    var base = new THREE.Mesh(new THREE.CylinderGeometry(0.88, 0.92, 1.05, 44), body);
    base.position.y = -1.42;
    base.castShadow = true;
    g.add(base);

    // Base accent ring
    var aring = new THREE.Mesh(new THREE.TorusGeometry(0.89, 0.05, 8, 44), mat(DKBLUE, {metal:0.15, rough:0.45}));
    aring.position.y = -0.96;
    g.add(aring);

    // Blade coupling
    var coup = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.32, 28), silver);
    coup.position.y = -0.82;
    g.add(coup);

    // Glass jar (tapered)
    var jar = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.46, 2.5, 44), glass);
    jar.position.y = 0.55;
    jar.castShadow = true;
    g.add(jar);

    // Liquid (blue water)
    var liq = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.52, 36), mat(0x4499EE, {metal:0, rough:0.12}));
    liq.position.y = -0.48;
    g.add(liq);

    // Blade cross
    for (var i = 0; i < 4; i++) {
      var bl = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.045, 0.13), silver);
      bl.rotation.y = (i * Math.PI) / 2;
      bl.position.set(Math.cos(i * Math.PI / 2) * 0.3, -0.66, Math.sin(i * Math.PI / 2) * 0.3);
      g.add(bl);
    }

    // Lid
    var lid = new THREE.Mesh(new THREE.CylinderGeometry(0.74, 0.74, 0.14, 44), body);
    lid.position.y = 1.85;
    g.add(lid);

    // Lid knob
    var knob = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.23, 0.24, 24), dark);
    knob.position.y = 2.04;
    g.add(knob);

    // Control buttons
    [[DKBLUE, -0.5], [BLUE, 0], [GOLD, 0.5]].forEach(function(pair, ii) {
      var x = pair[1];
      var c = [DKBLUE, BLUE, GOLD][ii];
      var b = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.13, 20), mat(c, {metal:0.1, rough:0.38}));
      b.rotation.x = -0.3;
      b.position.set(x, -1.02, 0.89);
      g.add(b);
    });

    g.position.y = 0.1;
    g.rotation.x = 0.06;
  }

  // 5. Table Lamp ─────────────────────────────────────────────────────────────
  function buildTableLamp(g) {
    var shade = mat(0xECBF6A, { metal: 0.06, rough: 0.72 });
    var inner = mat(0xFFF0A0, { emissive: 0xFFA820, emissiveInt: 0.55, metal: 0, rough: 0.9 });
    var stem  = mat(0xC8A060, { metal: 0.62, rough: 0.28 });
    var base  = mat(0xD8D0C8, { metal: 0.08, rough: 0.62 });
    var bulb  = mat(0xFFE8A0, { emissive: 0xFFBB00, emissiveInt: 1.3, metal: 0, rough: 0.3 });

    // Shade (cone)
    var shadeMesh = new THREE.Mesh(new THREE.ConeGeometry(1.45, 1.55, 44, 1, true), shade);
    shadeMesh.position.y = 1.1;
    shadeMesh.castShadow = true;
    g.add(shadeMesh);

    // Inner glow
    var innerMesh = new THREE.Mesh(new THREE.ConeGeometry(1.43, 1.53, 44, 1, true), inner);
    innerMesh.rotation.z = Math.PI;
    innerMesh.position.y = 1.1;
    g.add(innerMesh);

    // Top + bottom rim
    var topR = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.06, 8, 32), stem);
    topR.position.y = 1.87;
    g.add(topR);

    var botR = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.06, 8, 40), stem);
    botR.position.y = 0.34;
    g.add(botR);

    // Bulb
    var bulbM = new THREE.Mesh(new THREE.SphereGeometry(0.22, 24, 24), bulb);
    bulbM.position.y = 1.62;
    g.add(bulbM);

    // Stem
    var stemM = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.09, 2.05, 20), stem);
    stemM.position.y = -0.34;
    g.add(stemM);

    // Base
    var baseM = new THREE.Mesh(new THREE.CylinderGeometry(0.82, 0.88, 0.22, 44), base);
    baseM.position.y = -1.44;
    baseM.castShadow = true;
    g.add(baseM);

    var stepM = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.56, 0.2, 36), stem);
    stepM.position.y = -1.25;
    g.add(stepM);

    g.position.y = -0.05;
  }

  // 6. Chandelier ─────────────────────────────────────────────────────────────
  function buildChandelier(g) {
    var gold  = mat(0xC89840, { metal: 0.78, rough: 0.18 });
    var dgold = mat(0x806838, { metal: 0.72, rough: 0.24 });
    var glow  = mat(0xFFF8D0, { emissive: 0xFFBB20, emissiveInt: 1.0, metal: 0.05, rough: 0.12 });
    var cry   = mat(0xD8EEFF, { metal: 0.08, rough: 0.04 });

    // Canopy
    var canopy = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.42, 0.22, 36), gold);
    canopy.position.y = 2.4;
    g.add(canopy);

    // Drop rod
    var rod = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.88, 12), gold);
    rod.position.y = 1.9;
    g.add(rod);

    // Hub
    var hub = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), gold);
    hub.position.y = 1.42;
    g.add(hub);

    // 5 arms
    var N = 5;
    for (var i = 0; i < N; i++) {
      var ang = (i / N) * Math.PI * 2;
      var rx = Math.sin(ang) * 1.38;
      var rz = Math.cos(ang) * 1.38;

      // Arm rod
      var arm = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 1.35, 10), gold);
      arm.position.set(rx * 0.5, 1.0, rz * 0.5);
      arm.rotation.z = -Math.atan2(1.42 - 0.4, Math.sqrt(rx * rx + rz * rz) * 0.5) * Math.sign(rx || 1);
      arm.rotation.x = -Math.atan2(1.42 - 0.4, Math.sqrt(rx * rx + rz * rz) * 0.5) * Math.sign(rz || 1) * (Math.abs(rx) < 0.1 ? 1 : 0);
      g.add(arm);

      // Pendant wire
      var wire = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.72, 8), gold);
      wire.position.set(rx, 0.35, rz);
      g.add(wire);

      // Socket
      var socket = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.22, 20), dgold);
      socket.position.set(rx, -0.1, rz);
      g.add(socket);

      // Bulb
      var b = new THREE.Mesh(new THREE.SphereGeometry(0.28, 22, 22), glow);
      b.position.set(rx, -0.45, rz);
      g.add(b);

      // Crystal teardrop
      var c = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.42, 8), cry);
      c.rotation.z = Math.PI;
      c.position.set(rx, -0.85, rz);
      g.add(c);
    }

    g.position.y = -0.5;
  }

  // 7. Smart Lighting Set ─────────────────────────────────────────────────────
  function buildSmartLighting(g) {
    var strip  = mat(0x222830, { metal: 0.3,  rough: 0.6 });
    var hub    = mat(BLUE,    { metal: 0.2,  rough: 0.4 });
    var hubTop = mat(0x0A2860, { metal: 0.15, rough: 0.3 });

    // LED strip backing
    var back = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.15, 0.3), strip);
    back.position.y = 0.85;
    back.castShadow = true;
    g.add(back);

    // LED dots (color variety)
    var cols = [0xE8A820, 0xE8A820, 0x4488FF, 0x00CC55, 0xFF4444, 0xE8A820];
    cols.forEach(function(c, i) {
      var lm = mat(c, { emissive: c, emissiveInt: 0.95 });
      var l = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.13, 0.24), lm);
      l.position.set(-1.75 + i * 0.7, 0.94, 0);
      g.add(l);
    });

    // Hub body
    var hubB = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.86, 1.05), hub);
    hubB.position.y = -0.82;
    hubB.castShadow = true;
    g.add(hubB);

    // Hub top panel
    var htop = new THREE.Mesh(new THREE.BoxGeometry(1.33, 0.05, 1.03), hubTop);
    htop.position.y = -0.37;
    g.add(htop);

    // WiFi arcs
    for (var i = 0; i < 3; i++) {
      var ar = new THREE.Mesh(
        new THREE.TorusGeometry(0.13 + i * 0.14, 0.027, 8, 32, Math.PI),
        mat(GOLD, { emissive: GOLD, emissiveInt: 0.5 - i * 0.15 })
      );
      ar.rotation.x = Math.PI / 2;
      ar.rotation.z = Math.PI / 2;
      ar.position.set(0, -0.74 + i * 0.1, 0.54);
      g.add(ar);
    }
    // WiFi dot
    var wdot = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), mat(GOLD, {emissive:GOLD, emissiveInt:0.9}));
    wdot.position.set(0, -0.78, 0.54);
    g.add(wdot);

    // Status LED
    var sled = new THREE.Mesh(new THREE.SphereGeometry(0.068, 8, 8), mat(MINT, {emissive:MINT, emissiveInt:1.1}));
    sled.position.set(0.57, -0.52, 0.54);
    g.add(sled);

    // Connecting wire (line segments)
    var pts = [new THREE.Vector3(0, 0.82, 0), new THREE.Vector3(0.4, 0.3, 0.4), new THREE.Vector3(0, -0.37, 0.53)];
    var wgeo = new THREE.BufferGeometry().setFromPoints(pts);
    var wl = new THREE.Line(wgeo, new THREE.LineBasicMaterial({ color: 0x3366CC, opacity: 0.65, transparent: true }));
    g.add(wl);

    g.position.y = 0.05;
    g.rotation.x = 0.08;
  }

  // 8. Wall Sconce ────────────────────────────────────────────────────────────
  function buildWallSconce(g) {
    var metal  = mat(0xC8A060, { metal: 0.72, rough: 0.22 });
    var shade  = mat(0xEABF68, { metal: 0.08, rough: 0.72 });
    var sinner = mat(0xFFF0B0, { emissive: 0xFFB020, emissiveInt: 0.45, metal: 0, rough: 0.88 });
    var wall   = mat(0x0E1828, { metal: 0.0,  rough: 0.92 });
    var bulb   = mat(0xFFE888, { emissive: 0xFFAA00, emissiveInt: 1.1 });

    // Wall plate
    var plate = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.9, 0.14), wall);
    plate.position.set(-2.0, 0, 0);
    g.add(plate);

    [-0.65, 0.65].forEach(function(y) {
      var sc = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.09, 12), metal);
      sc.rotation.z = Math.PI / 2;
      sc.position.set(-1.98, y, 0.08);
      g.add(sc);
    });

    // Arm
    var arm = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 1.28, 16), metal);
    arm.rotation.z = Math.PI / 2;
    arm.position.set(-1.36, 0.6, 0);
    g.add(arm);

    // Vertical drop
    var drop = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.76, 16), metal);
    drop.position.set(-0.72, 0.24, 0);
    g.add(drop);

    // Shade (bell cone, opening downward)
    var shMesh = new THREE.Mesh(new THREE.ConeGeometry(1.15, 1.45, 44, 1, true), shade);
    shMesh.rotation.z = Math.PI;
    shMesh.position.set(0.3, -0.54, 0);
    shMesh.castShadow = true;
    g.add(shMesh);

    var shIn = new THREE.Mesh(new THREE.ConeGeometry(1.13, 1.43, 44, 1, true), sinner);
    shIn.position.set(0.3, -0.54, 0);
    g.add(shIn);

    // Shade rim
    var rim = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.055, 8, 44), metal);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(0.3, -1.27, 0);
    g.add(rim);

    // Bulb
    var bulbM = new THREE.Mesh(new THREE.SphereGeometry(0.24, 22, 22), bulb);
    bulbM.position.set(0.3, -0.32, 0);
    g.add(bulbM);

    g.position.set(0.6, 0.25, 0);
    g.rotation.y = -0.28;
  }

  // 9. Smart Speaker ──────────────────────────────────────────────────────────
  function buildSmartSpeaker(g) {
    var fabric  = mat(0x1A2840, { metal: 0.05, rough: 0.93 });
    var topCap  = mat(0x0A1826, { metal: 0.22, rough: 0.28 });
    var ringMat = mat(GOLD,    { emissive: GOLD, emissiveInt: 0.4, metal: 0.32, rough: 0.28 });
    var ledM    = mat(MINT,    { emissive: MINT, emissiveInt: 1.1 });

    // Main cylinder
    var body = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 2.65, 52), fabric);
    body.castShadow = true;
    g.add(body);

    // Top glossy cap
    var cap = new THREE.Mesh(new THREE.CylinderGeometry(1.06, 1.06, 0.42, 52), topCap);
    cap.position.y = 1.54;
    g.add(cap);

    // Touch ring on top
    var tr = new THREE.Mesh(new THREE.TorusGeometry(0.66, 0.075, 10, 52), ringMat);
    tr.position.y = 1.77;
    g.add(tr);

    // Volume marker
    var vm = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.055, 0.075), mat(WHITE, {rough:0.5}));
    vm.position.set(0, 1.78, 0.65);
    g.add(vm);

    // Woofer cone rings (embossed on side)
    for (var i = 0; i < 3; i++) {
      var r = 0.3 + i * 0.22;
      var wf = new THREE.Mesh(new THREE.TorusGeometry(r, 0.038, 7, 44), mat(0x0E1E38, {metal:0.1, rough:0.8}));
      wf.rotation.y = Math.PI / 2;
      wf.position.set(1.07, 0, 0);
      g.add(wf);
    }

    // Woofer centre disc
    var wd = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.04, 32), mat(0x080E1C, {metal:0.1, rough:0.7}));
    wd.rotation.z = Math.PI / 2;
    wd.position.set(1.07, 0, 0);
    g.add(wd);

    // LED ring base
    var lr = new THREE.Mesh(new THREE.TorusGeometry(0.94, 0.055, 8, 52), ringMat);
    lr.position.y = -1.35;
    g.add(lr);

    // Status LED
    var sl = new THREE.Mesh(new THREE.SphereGeometry(0.085, 8, 8), ledM);
    sl.position.set(0, -1.52, 0.92);
    g.add(sl);

    // Highlight streak
    var hs = new THREE.Mesh(new THREE.BoxGeometry(0.07, 2.2, 0.04), mat(WHITE, {metal:0, rough:0.3}));
    hs.position.set(0.96, 0, 0.38);
    hs.rotation.y = 0.4;
    var hsM = mat(WHITE, {metal:0, rough:0.3});
    hsM.transparent = true;
    hsM.opacity = 0.07;
    hs.material = hsM;
    g.add(hs);

    g.position.y = -0.12;
  }

  // 10. Wireless Headphones ───────────────────────────────────────────────────
  function buildHeadphones(g) {
    var plastic = mat(0x0A1830, { metal: 0.1,  rough: 0.44 });
    var cush    = mat(0x0D1E32, { metal: 0.0,  rough: 0.93 });
    var accent  = mat(GOLD,    { emissive: GOLD, emissiveInt: 0.32, metal: 0.22, rough: 0.28 });
    var led     = mat(MINT,    { emissive: MINT, emissiveInt: 1.0 });

    // Headband arc
    var band = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.14, 18, 68, Math.PI), plastic);
    band.rotation.z = -Math.PI / 2;
    band.position.y = 0.65;
    band.castShadow = true;
    g.add(band);

    // Headband padding
    var pad = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.09, 10, 68, Math.PI * 0.68), cush);
    pad.rotation.z = -Math.PI / 2;
    pad.rotation.y = Math.PI * 0.16;
    pad.position.y = 0.65;
    g.add(pad);

    // Size sliders
    [[-1.52, -0.28], [1.52, -0.28]].forEach(function(p) {
      var sl = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.58, 0.36), plastic);
      sl.position.set(p[0], p[1], 0);
      g.add(sl);
    });

    // Left cup
    var lc = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.52, 44), plastic);
    lc.rotation.x = Math.PI / 2;
    lc.position.set(-1.52, -0.9, 0);
    lc.castShadow = true;
    g.add(lc);

    var lk = new THREE.Mesh(new THREE.TorusGeometry(0.57, 0.22, 12, 44), cush);
    lk.rotation.x = Math.PI / 2;
    lk.position.set(-1.57, -0.9, 0);
    g.add(lk);

    // Left cup inner driver disc
    var ld = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.08, 36), mat(0x0a1420, {metal:0.15, rough:0.7}));
    ld.rotation.x = Math.PI / 2;
    ld.position.set(-1.57, -0.9, 0);
    g.add(ld);

    // Left ANC button
    var anc = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.09, 18), accent);
    anc.rotation.x = Math.PI / 2;
    anc.position.set(-1.52, -1.52, 0.72);
    g.add(anc);

    // Right cup
    var rc = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.52, 44), plastic);
    rc.rotation.x = Math.PI / 2;
    rc.position.set(1.52, -0.9, 0);
    rc.castShadow = true;
    g.add(rc);

    var rk = new THREE.Mesh(new THREE.TorusGeometry(0.57, 0.22, 12, 44), cush);
    rk.rotation.x = Math.PI / 2;
    rk.position.set(1.57, -0.9, 0);
    g.add(rk);

    var rd = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.08, 36), mat(0x0a1420, {metal:0.15, rough:0.7}));
    rd.rotation.x = Math.PI / 2;
    rd.position.set(1.57, -0.9, 0);
    g.add(rd);

    // Right BT LED
    var btl = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), led);
    btl.position.set(1.52, -1.52, 0.72);
    g.add(btl);

    g.position.y = 0.4;
    g.rotation.x = 0.12;
  }

  // 11. Power Bank ────────────────────────────────────────────────────────────
  function buildPowerBank(g) {
    var alu  = mat(0x8899BB, { metal: 0.76, rough: 0.2 });
    var dark = mat(DARK,    { metal: 0.4,  rough: 0.5 });
    var port = mat(0x080818, { metal: 0.5,  rough: 0.4 });
    var gld  = mat(GOLD,    { emissive: GOLD, emissiveInt: 0.88 });
    var dim  = mat(0x1A2438, { metal: 0.1,  rough: 0.7 });
    var btn  = mat(BLUE,    { emissive: 0x0033CC, emissiveInt: 0.3, metal: 0.1, rough: 0.4 });

    // Main body
    var body = new THREE.Mesh(new THREE.BoxGeometry(3.75, 1.15, 1.04), alu);
    body.castShadow = true;
    g.add(body);

    // Edge chamfer lines
    [0.6, -0.6].forEach(function(y) {
      var s = new THREE.Mesh(new THREE.BoxGeometry(3.75, 0.07, 1.06), dark);
      s.position.y = y;
      g.add(s);
    });

    // 4 LED indicators
    for (var i = 0; i < 4; i++) {
      var lm = i < 3 ? gld : dim;
      var d = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.07, 20), lm);
      d.rotation.x = Math.PI / 2;
      d.position.set(-0.92 + i * 0.62, 0.14, 0.54);
      g.add(d);
    }

    // USB-C ports x2
    [-0.84, -0.22].forEach(function(x) {
      var p = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.19, 0.11), port);
      p.position.set(x, -0.3, 0.54);
      g.add(p);
    });

    // USB-A port
    var ua = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.23, 0.11), port);
    ua.position.set(0.58, -0.29, 0.54);
    g.add(ua);

    // Power button on end face
    var pbtn = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.11, 20), btn);
    pbtn.rotation.z = Math.PI / 2;
    pbtn.position.set(1.95, 0.12, 0);
    g.add(pbtn);

    g.position.y = 0;
    g.rotation.x = 0.24;
    g.rotation.y = 0.28;
  }

  // 12. GaN Charger + Cable ───────────────────────────────────────────────────
  function buildGanCharger(g) {
    var body  = mat(0x181828, { metal: 0.16, rough: 0.42 });
    var blue  = mat(BLUE,    { metal: 0.1,  rough: 0.4 });
    var prong = mat(0xD0D0D8, { metal: 0.88, rough: 0.14 });
    var port  = mat(0x060814, { metal: 0.5,  rough: 0.4 });
    var cable = mat(0x1E2E52, { metal: 0.1,  rough: 0.7 });
    var conn  = mat(SILVER,  { metal: 0.78, rough: 0.18 });
    var led   = mat(MINT,    { emissive: MINT, emissiveInt: 1.0 });

    // Charger body
    var charger = new THREE.Mesh(new THREE.BoxGeometry(1.55, 1.55, 1.05), body);
    charger.castShadow = true;
    g.add(charger);

    // Blue accent badge face
    var badge = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.52, 0.07), blue);
    badge.position.set(0, 0.12, 0.56);
    g.add(badge);

    // Status LED
    var sl = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 8), led);
    sl.position.set(0.62, -0.42, 0.55);
    g.add(sl);

    // US prongs (folded, on back)
    [-0.3, 0.3].forEach(function(x) {
      var p = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.64, 0.09), prong);
      p.position.set(x, 0.22, -0.57);
      g.add(p);
    });

    // USB-C output port on bottom
    var op = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.22, 0.11), port);
    op.rotation.x = Math.PI / 2;
    op.position.set(0, -0.85, 0.2);
    g.add(op);

    // Braided cable (tube geometry along curve)
    var curvePts = [];
    for (var i = 0; i <= 24; i++) {
      var t = i / 24;
      curvePts.push(new THREE.Vector3(
        Math.sin(t * Math.PI * 1.6) * 0.45,
        -0.9 - t * 2.1,
        t * 0.65
      ));
    }
    var curve = new THREE.CatmullRomCurve3(curvePts);
    var tubeGeo = new THREE.TubeGeometry(curve, 32, 0.065, 8, false);
    var cableMesh = new THREE.Mesh(tubeGeo, cable);
    g.add(cableMesh);

    // USB-C connector at cable end
    var ep = curvePts[24];
    var connMesh = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.24, 0.72), conn);
    connMesh.position.set(ep.x, ep.y - 0.32, ep.z);
    g.add(connMesh);

    // Connector inner slot
    var slot = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.68), port);
    slot.position.set(ep.x, ep.y - 0.32, ep.z);
    g.add(slot);

    g.position.y = 0.85;
    g.rotation.x = 0.14;
    g.rotation.y = -0.32;
  }

  // ── BUILDERS MAP ───────────────────────────────────────────────────────────
  var BUILDERS = {
    'hair-dryer':        buildHairDryer,
    'massage-device':    buildMassageGun,
    'beauty-instrument': buildBeautyInstrument,
    'blender':           buildBlender,
    'table-lamp':        buildTableLamp,
    'chandelier':        buildChandelier,
    'smart-lighting':    buildSmartLighting,
    'wall-lamp':         buildWallSconce,
    'smart-speaker':     buildSmartSpeaker,
    'headphones':        buildHeadphones,
    'power-bank':        buildPowerBank,
    'cables-charger':    buildGanCharger
  };

  // ── CATALOG: real product photos from Unsplash CDN ────────────────────────
  function initCardImages() {
    var CDN = 'https://images.unsplash.com/';
    var PHOTOS = {
      'hair-dryer':        CDN + 'photo-1620331309205-b5a4669ac526',
      'massage-device':    CDN + 'photo-1755255020813-1cdb6a4bd9b0',
      'beauty-instrument': CDN + 'photo-1578747763484-51b21a33e4fa',
      'blender':           CDN + 'photo-1654064754916-e3edeb09c042',
      'table-lamp':        CDN + 'photo-1533090161767-e6ffed986c88',
      'chandelier':        CDN + 'photo-1538516789679-55272c1dc220',
      'smart-lighting':    CDN + 'photo-1544891480-a763b1c6105f',
      'wall-lamp':         CDN + 'photo-1766955863395-405e2eb6b870',
      'smart-speaker':     CDN + 'photo-1518671678551-911467efe539',
      'headphones':        CDN + 'photo-1505740420928-5e560c06d30e',
      'power-bank':        CDN + 'photo-1525858907241-d230b66fb9fa',
      'cables-charger':    CDN + 'photo-1517320069935-381614f8c1e5'
    };
    document.querySelectorAll('.prod-card[data-pid]').forEach(function(card) {
      var pid = card.dataset.pid;
      var base = PHOTOS[pid];
      if (!base) return;
      var vis = card.querySelector('.pc-vis');
      if (!vis) return;
      var icon = vis.querySelector('.pc-icon');
      if (icon) icon.style.display = 'none';
      var bg = vis.querySelector('.pc-vis-bg');
      if (bg) bg.style.display = 'none';
      vis.style.position = 'relative';
      var img = document.createElement('img');
      img.src = base + '?auto=format&fit=crop&w=280&h=200&q=82';
      img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;';
      img.loading = 'lazy';
      img.alt = '';
      vis.insertBefore(img, vis.firstChild);
    });
  }

  // ── MODAL: override pdBuildModel with PBR builders + drag-to-rotate ────────
  function installModalOverride() {
    window.pdBuildModel = function(pid) {
      if (window._pdAnim) { cancelAnimationFrame(window._pdAnim); window._pdAnim = null; }
      if (window._pdRen) { window._pdRen.forceContextLoss(); window._pdRen.dispose(); window._pdRen = null; }
      var builder = BUILDERS[pid];
      if (!window.THREE) return;
      if (!builder && !(pid === 'smart-speaker' && THREE.GLTFLoader)) return;
      var canvas = document.getElementById('pdm-canvas');
      var viz = canvas.parentElement;
      var W = viz.offsetWidth || 420, H = viz.offsetHeight || 360;
      var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
      renderer.setSize(W, H); renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.2;
      renderer.outputEncoding = THREE.sRGBEncoding;
      window._pdRen = renderer;
      var scene = new THREE.Scene(); scene.background = new THREE.Color(0x07101E);
      var cam = new THREE.PerspectiveCamera(36, W / H, 0.1, 100);
      cam.position.set(0, 1.1, 7); cam.lookAt(0, 0, 0);
      var key = new THREE.DirectionalLight(0xffffff, 3.2);
      key.position.set(5, 8, 6); key.castShadow = true; key.shadow.mapSize.set(1024, 1024); scene.add(key);
      var fill = new THREE.DirectionalLight(0x8899ff, 1.1); fill.position.set(-5, 2, 4); scene.add(fill);
      var rim = new THREE.DirectionalLight(0xE8A820, 0.9); rim.position.set(0, -4, -6); scene.add(rim);
      scene.add(new THREE.AmbientLight(0x1a1a2e, 2.5));
      var plane = new THREE.Mesh(new THREE.PlaneGeometry(20, 20),
        new THREE.MeshStandardMaterial({ color: new THREE.Color(0x060e1a), roughness: 1 }));
      plane.rotation.x = -Math.PI / 2; plane.position.y = -2.4; plane.receiveShadow = true; scene.add(plane);
      var group = new THREE.Group(); scene.add(group);
      if (pid === 'smart-speaker' && window.THREE && THREE.GLTFLoader) {
        var gltfLoader = new THREE.GLTFLoader();
        gltfLoader.load('models/speaker/bose_smart_speaker.glb', function(gltf) {
          var model = gltf.scene;
          var box3 = new THREE.Box3().setFromObject(model);
          var size3 = box3.getSize(new THREE.Vector3());
          var s = 4 / Math.max(size3.x, size3.y, size3.z);
          model.scale.setScalar(s);
          model.updateMatrixWorld(true);
          box3.setFromObject(model);
          var c3 = box3.getCenter(new THREE.Vector3());
          model.position.set(-c3.x, -box3.min.y - 2.4, -c3.z);
          model.traverse(function(child) {
            if (child.isMesh) { child.castShadow = true; child.receiveShadow = true; }
          });
          group.add(model);
        }, undefined, function() { if (builder) builder(group); });
      } else if (builder) {
        builder(group);
      }
      var drag = false, lx = 0, ly = 0, ry = 0.42, rx = 0, vy = 0, vx = 0;
      var onDown = function(e) { drag = true; lx = e.clientX||(e.touches&&e.touches[0].clientX)||lx; ly = e.clientY||(e.touches&&e.touches[0].clientY)||ly; vy = vx = 0; };
      var onUp = function() { drag = false; };
      var onMove = function(e) {
        if (!drag) return;
        var cx = e.clientX||(e.touches&&e.touches[0].clientX)||lx;
        var cy = e.clientY||(e.touches&&e.touches[0].clientY)||ly;
        vy = (cx - lx) * 0.016; vx = (cy - ly) * 0.009; lx = cx; ly = cy;
      };
      canvas.addEventListener('mousedown', onDown);
      window.addEventListener('mouseup', onUp);
      window.addEventListener('mousemove', onMove);
      canvas.addEventListener('touchstart', onDown, { passive: true });
      window.addEventListener('touchend', onUp);
      window.addEventListener('touchmove', onMove, { passive: true });
      function loop() {
        window._pdAnim = requestAnimationFrame(loop);
        if (!drag) { ry += 0.009; vy *= 0.88; vx *= 0.88; }
        rx += vx; ry += vy;
        group.rotation.y = ry;
        group.rotation.x = Math.max(-0.85, Math.min(0.85, rx));
        renderer.render(scene, cam);
      }
      loop();
    };
  }

  // ── 3D SHOWROOM: live rotating models, dot navigation ─────────────────────
  function initShowroom() {
    var stage = document.querySelector('.sr-stage');
    if (!stage || !window.THREE) return;

    // Hide the floating SVG display
    var prodDisplay = stage.querySelector('.sr-prod-display');
    if (prodDisplay) prodDisplay.style.display = 'none';

    // Canvas fills the full stage
    var canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;z-index:2;border-radius:inherit;';
    stage.appendChild(canvas);
    var W = stage.offsetWidth || 540;
    var H = stage.offsetHeight || 405;

    var PRODS = [
      {
        loadFbx: true,
        tagZh: '消费电子 · 展示产品', tagEn: 'Consumer Electronics · Featured',
        nameZh: '智能音箱', nameEn: 'Smart Speaker',
        spec: '360° · BT 5.3 · OEM/ODM',
        matZh: '材质：ABS外壳 · 纤维编织 · 铝合金底座',
        matEn: 'Material: ABS · fabric weave · aluminum base'
      },
      {
        builder: buildHairDryer,
        tagZh: '小家电 · 展示产品', tagEn: 'Small Appliance · Featured',
        nameZh: '电吹风', nameEn: 'Hair Dryer',
        spec: '1800–2200W · Ionic · OEM/ODM',
        matZh: '材质：ABS外壳 · 专业电机 · 多档温控',
        matEn: 'Material: ABS · pro motor · multi-speed'
      },
      {
        builder: buildTableLamp,
        tagZh: '艺术灯具 · 展示产品', tagEn: 'Art Lighting · Featured',
        nameZh: '装饰台灯', nameEn: 'Decorative Table Lamp',
        spec: 'E27 · LED · OEM/ODM',
        matZh: '材质：大理石/金属底座 · E27灯口',
        matEn: 'Material: marble / metal base · E27 socket'
      }
    ];

    var currentIdx = 0;
    var drag = false, lx = 0, ly = 0, ry = 0, rx = 0, vy = 0, vx = 0;
    var srGroup = null;

    // Build renderer + scene once
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(W, H, false);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.2;
    renderer.outputEncoding = THREE.sRGBEncoding;
    var scene = new THREE.Scene(); scene.background = new THREE.Color(0x07101E);
    var isMobile = W < 520;
    var cam = new THREE.PerspectiveCamera(isMobile ? 50 : 46, W / H, 0.1, 100);
    cam.position.set(0, isMobile ? 1.2 : 0.8, isMobile ? 8 : 9);
    cam.lookAt(0, isMobile ? -1.6 : -0.3, 0);
    var key = new THREE.DirectionalLight(0xffffff, 3.2); key.position.set(5, 8, 6); key.castShadow = true; key.shadow.mapSize.set(256, 256); scene.add(key);
    var fill = new THREE.DirectionalLight(0x8899ff, 1.1); fill.position.set(-5, 2, 4); scene.add(fill);
    var rim = new THREE.DirectionalLight(0xE8A820, 0.9); rim.position.set(0, -4, -6); scene.add(rim);
    scene.add(new THREE.AmbientLight(0x1a1a2e, 2.5));
    var plane = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.MeshStandardMaterial({ color: new THREE.Color(0x060e1a), roughness: 1 }));
    plane.rotation.x = -Math.PI / 2; plane.position.y = -2.4; plane.receiveShadow = true; scene.add(plane);

    // Drag
    canvas.addEventListener('mousedown', function(e) { drag = true; lx = e.clientX; ly = e.clientY; vy = vx = 0; });
    window.addEventListener('mouseup', function() { drag = false; });
    canvas.addEventListener('mousemove', function(e) { if (!drag) return; vy = (e.clientX - lx) * 0.016; vx = (e.clientY - ly) * 0.009; lx = e.clientX; ly = e.clientY; });
    canvas.addEventListener('touchstart', function(e) { drag = true; lx = e.touches[0].clientX; ly = e.touches[0].clientY; vy = vx = 0; }, { passive: true });
    window.addEventListener('touchend', function() { drag = false; });
    canvas.addEventListener('touchmove', function(e) { if (!drag) return; vy = (e.touches[0].clientX - lx) * 0.016; vx = (e.touches[0].clientY - ly) * 0.009; lx = e.touches[0].clientX; ly = e.touches[0].clientY; }, { passive: true });

    function makeShowroomScene(idx) {
      // Swap group only — renderer/scene/cam/lights stay
      if (srGroup) scene.remove(srGroup);
      srGroup = new THREE.Group(); ry = 0; rx = 0; vy = 0; vx = 0;
      scene.add(srGroup);
      var p = PRODS[idx];
      if (p.loadFbx && window.THREE && THREE.GLTFLoader) {
        var loader = new THREE.GLTFLoader();
        loader.load('models/speaker/bose_smart_speaker.glb', function(gltf) {
          var model = gltf.scene;
          var box = new THREE.Box3().setFromObject(model);
          var size = box.getSize(new THREE.Vector3());
          var scale = 4.5 / Math.max(size.x, size.y, size.z);
          model.scale.setScalar(scale);
          model.updateMatrixWorld(true);
          box.setFromObject(model);
          var center = box.getCenter(new THREE.Vector3());
          model.position.set(-center.x, -box.min.y - 2.4, -center.z);
          model.traverse(function(child) {
            if (child.isMesh) { child.castShadow = true; child.receiveShadow = true; }
          });
          if (srGroup && srGroup.parent === scene) { srGroup.add(model); }
        }, undefined, function() { buildSmartSpeaker(srGroup); });
      } else if (p.builder) {
        p.builder(srGroup);
      } else {
        buildSmartSpeaker(srGroup);
      }
    }

    function loop() {
      requestAnimationFrame(loop);
      if (!drag) { ry += 0.009; vy *= 0.88; vx *= 0.88; }
      rx += vx; ry += vy;
      if (srGroup) { srGroup.rotation.y = ry; srGroup.rotation.x = Math.max(-0.6, Math.min(0.6, rx)); }
      renderer.render(scene, cam);
    }
    loop();

    window.addEventListener('resize', function() {
      var W2 = stage.offsetWidth || 390;
      var H2 = stage.offsetHeight || 292;
      renderer.setSize(W2, H2, false);
      cam.aspect = W2 / H2;
      cam.updateProjectionMatrix();
    });

    function updateLabel(idx) {
      var p = PRODS[idx];
      var label = document.querySelector('.sr-label');
      if (!label) return;
      var tZh = label.querySelector('.sr-label-tag.zh-only'), tEn = label.querySelector('.sr-label-tag.en-only');
      var nZh = label.querySelector('.sr-label-cn.zh-only'), nEn = label.querySelector('.sr-label-cn.en-only');
      var spec = label.querySelector('.sr-label-en');
      var mZh = label.querySelector('.sr-label-spec.zh-only'), mEn = label.querySelector('.sr-label-spec.en-only');
      if (tZh) tZh.textContent = p.tagZh;
      if (tEn) tEn.textContent = p.tagEn;
      if (nZh) nZh.textContent = p.nameZh;
      if (nEn) nEn.textContent = p.nameEn;
      if (spec) spec.textContent = p.spec;
      if (mZh) mZh.textContent = p.matZh;
      if (mEn) mEn.textContent = p.matEn;
    }

    var dots = document.querySelectorAll('.sr-dot');
    dots.forEach(function(dot, i) {
      dot.addEventListener('click', function() {
        if (i === currentIdx) return;
        currentIdx = i;
        dots.forEach(function(d, j) { d.classList.toggle('on', j === i); });
        updateLabel(i);
        makeShowroomScene(i);
      });
    });

    makeShowroomScene(0);
    updateLabel(0);
  }

  function loadScript(src, cb) {
    var s = document.createElement('script');
    s.src = src; s.onload = cb; s.onerror = cb;
    document.head.appendChild(s);
  }

  function init() {
    installModalOverride();
    initCardImages();
    // Load GLTFLoader (no deps needed for GLB), then init showroom
    loadScript('https://unpkg.com/three@0.134.0/examples/js/loaders/GLTFLoader.js', function() {
      initShowroom();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    requestAnimationFrame(init);
  }
})();
</script>`;

// Strip any previously injected block, then re-inject
html = html.replace(/\n?<script>\s*\(function \(\) \{[\s\S]*?}\)\(\);\s*<\/script>/, '');
html = html.replace('</body>', script + '\n</body>');

writeFileSync(path, html, 'utf-8');
console.log('Injected 3D render script.');
