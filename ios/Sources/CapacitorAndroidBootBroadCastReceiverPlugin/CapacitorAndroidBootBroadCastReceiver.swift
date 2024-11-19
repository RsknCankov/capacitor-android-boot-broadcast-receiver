import Foundation

@objc public class CapacitorAndroidBootBroadCastReceiver: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
