import * as THREE from 'three'

// ------ 주제: Light 조명

export default function example() {
    // 동적으로 캔버스 조립하기
    // const renderer = new THREE.WebGLRenderer()
    // renderer.setSize(window.innerWidth, window.innerHeight)
    // document.body.appendChild(renderer.domElement)

    // html에서 캔버스 가져와서 사용하기
    const canvas = document.querySelector('#three-canvas')
    const renderer = new THREE.WebGLRenderer({ 
        canvas,
        antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Scene
    const scene = new THREE.Scene()

    // Camera
    // perspective Camera(원근 카메라)
    const camera = new THREE.PerspectiveCamera(
        75, // 시야각(field of view)
        window.innerWidth / window.innerHeight, // 종횡비(aspect)
        0.1, // near
        1000 // far
    )

    camera.position.x = 2
    camera.position.y = 2
    camera.position.z = 5
    scene.add(camera)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.x = 1
    // light.position.y = 0
    light.position.z = 5
    scene.add(light)
    

    // Mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({
        color: 'red'
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // 그리기
    renderer.render(scene, camera)
}