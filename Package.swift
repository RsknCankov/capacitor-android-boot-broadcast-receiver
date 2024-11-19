// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorAndroidBootBroadcastReceiver",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorAndroidBootBroadcastReceiver",
            targets: ["CapacitorAndroidBootBroadCastReceiverPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorAndroidBootBroadCastReceiverPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorAndroidBootBroadCastReceiverPlugin"),
        .testTarget(
            name: "CapacitorAndroidBootBroadCastReceiverPluginTests",
            dependencies: ["CapacitorAndroidBootBroadCastReceiverPlugin"],
            path: "ios/Tests/CapacitorAndroidBootBroadCastReceiverPluginTests")
    ]
)