from enum import Enum


class MerossEventType(Enum):
    # Fired when the MQTT client connects/disconnects to the MQTT broker
    CLIENT_CONNECTION = 10
    DEVICE_ONLINE_STATUS = 100
    DEVICE_SWITCH_STATUS = 1000
    DEVICE_BULB_SWITCH_STATE = 2000
    DEVICE_BULB_STATE = 2001
    GARAGE_DOOR_STATUS = 2000


class MerossEvent(object):
    event_type = None  # type: MerossEventType

    def __init__(self, event_type):
        self.event_type = event_type


class ClientConnectionEvent(MerossEvent):
    status = None

    def __init__(self, current_status):
        super(ClientConnectionEvent, self).__init__(MerossEventType.CLIENT_CONNECTION)
        self.status = current_status


class DeviceOnlineStatusEvent(MerossEvent):
    # Pointer to the device object
    device = None

    # Current status of the device
    status = None

    def __init__(self, dev, current_status):
        super(DeviceOnlineStatusEvent, self).__init__(MerossEventType.DEVICE_ONLINE_STATUS)
        self.device = dev
        self.status = "online" if current_status else "offline"


class DeviceSwitchStatusEvent(MerossEvent):
    # Pointer to the device object
    device = None

    # Channel ID where the event occurred
    channel_id = None

    # Current state of the switch where the event occurred
    switch_state = None

    # Indicates id the event was generated by a command issued by the library itself.
    # This is particularly useful in the case the user handler wants only to react
    # to events generated by third parties.
    generated_by_myself = None

    def __init__(self, dev, channel_id, switch_state, generated_by_myself):
        super(DeviceSwitchStatusEvent, self).__init__(MerossEventType.DEVICE_SWITCH_STATUS)
        self.device = dev
        self.channel_id = channel_id
        self.switch_state = switch_state
        self.generated_by_myself = generated_by_myself


class DeviceDoorStatusEvent(MerossEvent):
    # Pointer to the device object
    device = None

    # Current state of the door
    door_state = None

    # Channel related to the door controller
    channel = None

    # Indicates id the event was generated by a command issued by the library itself.
    # This is particularly useful in the case the user handler wants only to react
    # to events generated by third parties.
    generated_by_myself = None

    def __init__(self, dev, channel_id, door_state, generated_by_myself):
        super(DeviceDoorStatusEvent, self).__init__(MerossEventType.GARAGE_DOOR_STATUS)
        self.device = dev
        self.channel = channel_id
        self.door_state = "open" if door_state else "closed"
        self.generated_by_myself = generated_by_myself


class BulbSwitchStateChangeEvent(MerossEvent):
    def __init__(self, dev, channel_id, is_on, generated_by_myself):
        super(BulbSwitchStateChangeEvent, self).__init__(MerossEventType.DEVICE_BULB_SWITCH_STATE)
        self.device = dev
        self.channel = channel_id
        self.is_on = is_on
        self.generated_by_myself = generated_by_myself


class BulbLightStateChangeEvent(MerossEvent):
    def __init__(self, dev, channel_id, light_state, generated_by_myself):
        super(BulbLightStateChangeEvent, self).__init__(MerossEventType.DEVICE_BULB_STATE)
        self.device = dev
        self.channel = channel_id
        self.light_state = light_state
        self.generated_by_myself = generated_by_myself