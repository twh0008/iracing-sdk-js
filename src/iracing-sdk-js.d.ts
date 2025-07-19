declare module '../../iracing-sdk-js/src/iracing-sdk-js.js' {
  type irOptionKeys =
    | 'telemetryUpdateInterval'
    | 'sessionInfoUpdateInterval'
    | 'sessionInfoParser';
  type sessionInfoParser = {
    // define as any
    sessionInfo: string;
  };
  type irOptions =
    | {
        // Define the structure of irOptions if needed
        [key in irOptionKeys]: number | sessionInfoParser | null | undefined;
      }
    | undefined;
  enum BroadcastMsg {
    CamSwitchPos = 0, // switch cam, args: car position, group, camera
    CamSwitchNum = 1, // switch cam, args: driver #, group camera
    CamSetState = 2, // set cam state, args: CameraState
    ReplaySetPlaySpeed = 3, // set replay play speed, args: speed, slow motion
    ReplaySetPlayPosition = 4, // Jump to frame, args: RpyPosMode, FrameNumber(high, low)
    ReplaySearch = 5, // Search replay, args: RpySrchMode
    ReplaySetState = 6, // Set replay state, args: RpyStateMode
    ReloadTextures = 7, // reload textures, args: ReloadTexturesMode, carIdx
    ChatCommand = 8, // Chat Commands, args: ChatCommand, subCommand
    PitCommand = 9, // Pit Commands, args: PitCommand, param
    TelemCommand = 10, // Disk telemetry commands, args: TelemCommand
    FFBCommand = 11, // not supported yet in NODE, args: FFBCommand, value(float, high, low)
    ReplaySearchSessionTime = 12, // search replay by timestamp, args: SessionNum, sessionTimeMS(high, low)
  }
  enum CameraState {
    // enum for camera state; is bitfield
    IsSessionScreen = 1,
    IsScenicActive = 2,
    CamToolActive = 4,
    UIHidden = 8,
    UseAutoShotSelection = 16,
    UseTemporaryEdits = 32,
    UseKeyAcceleration = 64,
    UseKey10xAcceleration = 128,
    useMouseAimMode = 256,
  }
  enum RpyPosMode {
    Begin = 0, // FrameNumber relative to start of replay
    Current = 1, // FrameNumber relative to current frame
    End = 2, // FrameNumber relative to end of replay
  }
  enum RpySrchMode {
    ToStart = 0, // search to start of replay
    ToEnd = 1, // search to end of replay
    PrevSession = 2, // search for previous session
    NextSession = 3, // search for next session
    PrevLap = 4, // search for previous lap
    NextLap = 5, // search for next lap
    PrevFrame = 6, // search for previous frame
    NextFrame = 7, // search for next frame
    PrevIncident = 8, // search for previous incident
    NextIncident = 9, // search for next incident
  }
  enum RpyStateMode {
    EraseTape = 0, // erase tape
  }
  enum ReloadTexturesMode {
    All = 0, // reload all textures
    CarIdx = 1, // reload textures for carIdx
  }
  enum ChatCommand {
    Macro = 0, // Chat macro command 0-15
    BeginChat = 1, // Open New Chat Window
    Reply = 2, // Reply to Last Private Chat
    CloseChat = 3, // Close Chat Window
  }
  enum PitCommand {
    // 11 commands
    Clear = 0, // Clear all pit checkboxes
    CleanWindshield = 1, // Clean windshield
    Fuel = 2, // Requests Fuel, args: FuelAmount(liters, optional)
    LFTire = 3, // Left Front Tire, args: TirePressure(kPa, optional)
    RFTire = 4, // Right Front Tire, args: TirePressure(kPa, optional)
    LRTire = 5, // Left Rear Tire, args: TirePressure(kPa, optional)
    RRTire = 6, // Right Rear Tire, args: TirePressure(kPa, optional)
    ClearTires = 7, // Clear all tire checkboxes, args: none
    FRepair = 8, // Fast Repair, args: none
    ClearWS = 9, // disable CleanWindshield, args: none
    ClearFR = 10, // disable Fast Repair, args: none
    ClearFuel = 11, // disable Fueling, args: none
  }
  enum TelemCommand {
    Stop = 0, // Stop disk logging
    Start = 1, // Start disk logging
    Restart = 2, // Restart disk logging
  }
  enum CamFocusAt {
    Incident = -3, // Focus on incident
    Leader = -2, // Focus on leader
    Exciting = -1, // Focus on exciting
  }
  enum ChatMacro {
    // unk values 0-15
    Macro0 = 0,
    Macro1 = 1,
    Macro2 = 2,
    Macro3 = 3,
    Macro4 = 4,
    Macro5 = 5,
    Macro6 = 6,
    Macro7 = 7,
    Macro8 = 8,
    Macro9 = 9,
    Macro10 = 10,
    Macro11 = 11,
    Macro12 = 12,
    Macro13 = 13,
    Macro14 = 14,
    Macro15 = 15,
  }
  type carInt = number | string | CamFocusAt; // Represents a car index, can be any integer
  type IrDataUnk = null | undefined;
  type IrSdkConsts = {
    BroadcastMsg: BroadcastMsg;
    CameraState: CameraState;
    RpyPosMode: RpyPosMode;
    RpySrchMode: RpySrchMode;
    RpyStateMode: RpyStateMode;
    ReloadTexturesMode: ReloadTexturesMode;
    ChatCommand: ChatCommand;
    PitCommand: PitCommand;
    TelemCommand: TelemCommand;
    CamFocusAt: CamFocusAt;
  };
  interface ITelemetry {
    // from RaceVision telemetry interface github: https://github.com/mpavich2/RaceVision
    timestamp: string;
    values: {
      SessionTime: number;
      SessionTick: number;
      SessionNum: number;
      SessionState: string;
      SessionUniqueID: number;
      SessionFlags: Array<string>;
      SessionTimeRemain: number;
      SessionLapsRemain: number;
      SessionLapsRemainEx: number;
      SessionTimeTotal: number;
      SessionLapsTotal: number;
      SessionJokerLapsRemain: number;
      SessionOnJokerLap: boolean;
      SessionTimeOfDay: number;
      RadioTransmitCarIdx: number;
      RadioTransmitRadioIdx: number;
      RadioTransmitFrequencyIdx: number;
      DisplayUnits: number;
      DriverMarker: boolean;
      PushToTalk: boolean;
      PushToPass: boolean;
      ManualBoost: boolean;
      ManualNoBoost: boolean;
      IsOnTrack: boolean;
      IsReplayPlaying: boolean;
      ReplayFrameNum: number;
      ReplayFrameNumEnd: number;
      IsDiskLoggingEnabled: boolean;
      IsDiskLoggingActive: boolean;
      FrameRate: number;
      CpuUsageFG: number;
      GpuUsage: number;
      ChanAvgLatency: number;
      ChanLatency: number;
      ChanQuality: number;
      ChanPartnerQuality: number;
      CpuUsageBG: number;
      ChanClockSkew: number;
      MemPageFaultSec: number;
      MemSoftPageFaultSec: number;
      PlayerCarPosition: number;
      PlayerCarClassPosition: number;
      PlayerCarClass: number;
      PlayerTrackSurface: string;
      PlayerTrackSurfaceMaterial: string;
      PlayerCarIdx: number;
      PlayerCarTeamIncidentCount: number;
      PlayerCarMyIncidentCount: number;
      PlayerCarDriverIncidentCount: number;
      PlayerCarWeightPenalty: number;
      PlayerCarPowerAdjust: number;
      PlayerCarDryTireSetLimit: number;
      PlayerCarTowTime: number;
      PlayerCarInPitStall: boolean;
      PlayerCarPitSvStatus: string;
      PlayerTireCompound: number;
      PlayerFastRepairsUsed: number;
      CarIdxLap: Array<number>;
      CarIdxLapCompleted: Array<number>;
      CarIdxLapDistPct: Array<number>;
      CarIdxTrackSurface: Array<string>;
      CarIdxTrackSurfaceMaterial: Array<string>;
      CarIdxOnPitRoad: Array<boolean>;
      CarIdxPosition: Array<number>;
      CarIdxClassPosition: Array<number>;
      CarIdxClass: Array<number>;
      CarIdxF2Time: Array<number>;
      CarIdxEstTime: Array<number>;
      CarIdxLastLapTime: Array<number>;
      CarIdxBestLapTime: Array<number>;
      CarIdxBestLapNum: Array<number>;
      CarIdxTireCompound: Array<number>;
      CarIdxQualTireCompound: Array<number>;
      CarIdxQualTireCompoundLocked: Array<boolean>;
      CarIdxFastRepairsUsed: Array<number>;
      CarIdxSessionFlags: Array<Array<string>>;
      PaceMode: string;
      CarIdxPaceLine: Array<number>;
      CarIdxPaceRow: Array<number>;
      CarIdxPaceFlags: Array<Array<any>>;
      OnPitRoad: boolean;
      CarIdxSteer: Array<number>;
      CarIdxRPM: Array<number>;
      CarIdxGear: Array<number>;
      SteeringWheelAngle: number;
      Throttle: number;
      Brake: number;
      Clutch: number;
      Gear: number;
      RPM: number;
      PlayerCarSLFirstRPM: number;
      PlayerCarSLShiftRPM: number;
      PlayerCarSLLastRPM: number;
      PlayerCarSLBlinkRPM: number;
      Lap: number;
      LapCompleted: number;
      LapDist: number;
      LapDistPct: number;
      RaceLaps: number;
      LapBestLap: number;
      LapBestLapTime: number;
      LapLastLapTime: number;
      LapCurrentLapTime: number;
      LapLasNLapSeq: number;
      LapLastNLapTime: number;
      LapBestNLapLap: number;
      LapBestNLapTime: number;
      LapDeltaToBestLap: number;
      LapDeltaToBestLap_DD: number;
      LapDeltaToBestLap_OK: boolean;
      LapDeltaToOptimalLap: number;
      LapDeltaToOptimalLap_DD: number;
      LapDeltaToOptimalLap_OK: boolean;
      LapDeltaToSessionBestLap: number;
      LapDeltaToSessionBestLap_DD: number;
      LapDeltaToSessionBestLap_OK: boolean;
      LapDeltaToSessionOptimalLap: number;
      LapDeltaToSessionOptimalLap_DD: number;
      LapDeltaToSessionOptimalLap_OK: boolean;
      LapDeltaToSessionLastlLap: number;
      LapDeltaToSessionLastlLap_DD: number;
      LapDeltaToSessionLastlLap_OK: boolean;
      Speed: number;
      Yaw: number;
      YawNorth: number;
      Pitch: number;
      Roll: number;
      EnterExitReset: number;
      TrackTemp: number;
      TrackTempCrew: number;
      AirTemp: number;
      TrackWetness: string;
      Skies: number;
      AirDensity: number;
      AirPressure: number;
      WindVel: number;
      WindDir: number;
      RelativeHumidity: number;
      FogLevel: number;
      Precipitation: number;
      SolarAltitude: number;
      SolarAzimuth: number;
      WeatherDeclaredWet: boolean;
      DCLapStatus: number;
      DCDriversSoFar: number;
      OkToReloadTextures: boolean;
      LoadNumTextures: boolean;
      CarLeftRight: string;
      PitsOpen: boolean;
      VidCapEnabled: boolean;
      VidCapActive: boolean;
      PitRepairLeft: number;
      PitOptRepairLeft: number;
      PitstopActive: boolean;
      FastRepairUsed: number;
      FastRepairAvailable: number;
      LFTiresUsed: number;
      RFTiresUsed: number;
      LRTiresUsed: number;
      RRTiresUsed: number;
      LeftTireSetsUsed: number;
      RightTireSetsUsed: number;
      FrontTireSetsUsed: number;
      RearTireSetsUsed: number;
      TireSetsUsed: number;
      LFTiresAvailable: number;
      RFTiresAvailable: number;
      LRTiresAvailable: number;
      RRTiresAvailable: number;
      LeftTireSetsAvailable: number;
      RightTireSetsAvailable: number;
      FrontTireSetsAvailable: number;
      RearTireSetsAvailable: number;
      TireSetsAvailable: number;
      CamCarIdx: number;
      CamCameraNumber: number;
      CamGroupNumber: number;
      CamCameraState: Array<string>;
      IsOnTrackCar: boolean;
      IsInGarage: boolean;
      SteeringWheelAngleMax: number;
      ShiftPowerPct: number;
      ShiftGrindRPM: number;
      ThrottleRaw: number;
      BrakeRaw: number;
      ClutchRaw: number;
      HandbrakeRaw: number;
      BrakeABSactive: boolean;
      EngineWarnings: Array<string>;
      FuelLevelPct: number;
      PitSvFlags: Array<any>;
      PitSvLFP: number;
      PitSvRFP: number;
      PitSvLRP: number;
      PitSvRRP: number;
      PitSvFuel: number;
      PitSvTireCompound: number;
      CarIdxP2P_Status: Array<boolean>;
      CarIdxP2P_Count: Array<number>;
      SteeringWheelPctTorque: number;
      SteeringWheelPctTorqueSign: number;
      SteeringWheelPctTorqueSignStops: number;
      SteeringWheelPctIntensity: number;
      SteeringWheelPctSmoothing: number;
      SteeringWheelPctDamper: number;
      SteeringWheelLimiter: number;
      SteeringWheelMaxForceNm: number;
      SteeringWheelPeakForceNm: number;
      SteeringWheelUseLinear: boolean;
      ShiftIndicatorPct: number;
      ReplayPlaySpeed: number;
      ReplayPlaySlowMotion: boolean;
      ReplaySessionTime: number;
      ReplaySessionNum: number;
      TireLF_RumblePitch: number;
      TireRF_RumblePitch: number;
      TireLR_RumblePitch: number;
      TireRR_RumblePitch: number;
      IsGarageVisible: boolean;
      SteeringWheelTorque_ST: Array<number>;
      SteeringWheelTorque: number;
      VelocityZ_ST: Array<number>;
      VelocityY_ST: Array<number>;
      VelocityX_ST: Array<number>;
      VelocityZ: number;
      VelocityY: number;
      VelocityX: number;
      YawRate_ST: Array<number>;
      PitchRate_ST: Array<number>;
      RollRate_ST: Array<number>;
      YawRate: number;
      PitchRate: number;
      RollRate: number;
      VertAccel_ST: Array<number>;
      LatAccel_ST: Array<number>;
      LongAccel_ST: Array<number>;
      VertAccel: number;
      LatAccel: number;
      LongAccel: number;
      dcStarter: boolean;
      dcTractionControlToggle: boolean;
      dcPitSpeedLimiterToggle: boolean;
      dcHeadlightFlash: boolean;
      dpRFTireChange: number;
      dpLFTireChange: number;
      dpRRTireChange: number;
      dpLRTireChange: number;
      dpFuelFill: number;
      dpFuelAutoFillEnabled: number;
      dpFuelAutoFillActive: number;
      dpWindshieldTearoff: number;
      dpFuelAddKg: number;
      dcToggleWindshieldWipers: boolean;
      dcTriggerWindshieldWipers: boolean;
      dpFastRepair: number;
      dcBrakeBias: number;
      dpLFTireColdPress: number;
      dpRFTireColdPress: number;
      dpLRTireColdPress: number;
      dpRRTireColdPress: number;
      dcABS: number;
      FuelUsePerHour: number;
      Voltage: number;
      WaterTemp: number;
      WaterLevel: number;
      FuelPress: number;
      OilTemp: number;
      OilPress: number;
      OilLevel: number;
      ManifoldPress: number;
      FuelLevel: number;
      Engine0_RPM: number;
      RFbrakeLinePress: number;
      RFcoldPressure: number;
      RFtempCL: number;
      RFtempCM: number;
      RFtempCR: number;
      RFwearL: number;
      RFwearM: number;
      RFwearR: number;
      LFbrakeLinePress: number;
      LFcoldPressure: number;
      LFtempCL: number;
      LFtempCM: number;
      LFtempCR: number;
      LFwearL: number;
      LFwearM: number;
      LFwearR: number;
      RRbrakeLinePress: number;
      RRcoldPressure: number;
      RRtempCL: number;
      RRtempCM: number;
      RRtempCR: number;
      RRwearL: number;
      RRwearM: number;
      RRwearR: number;
      LRbrakeLinePress: number;
      LRcoldPressure: number;
      LRtempCL: number;
      LRtempCM: number;
      LRtempCR: number;
      LRwearL: number;
      LRwearM: number;
      LRwearR: number;
      LRshockDefl: number;
      LRshockDefl_ST: Array<number>;
      LRshockVel: number;
      LRshockVel_ST: Array<number>;
      RRshockDefl: number;
      RRshockDefl_ST: Array<number>;
      RRshockVel: number;
      RRshockVel_ST: Array<number>;
      LFshockDefl: number;
      LFshockDefl_ST: Array<number>;
      LFshockVel: number;
      LFshockVel_ST: Array<number>;
      RFshockDefl: number;
      RFshockDefl_ST: Array<number>;
      RFshockVel: number;
      RFshockVel_ST: Array<number>;
    };
  }

  interface ISessionInfo {
    // from RaceVision session info interface github: https://github.com/mpavich2/RaceVision
    timestamp: string;
    data: {
      WeekendInfo: {
        TrackName: string;
        TrackID: number;
        TrackLength: string;
        TrackLengthOfficial: string;
        TrackDisplayName: string;
        TrackDisplayShortName: string;
        TrackConfigName: string;
        TrackCity: string;
        TrackCountry: string;
        TrackAltitude: string;
        TrackLatitude: string;
        TrackLongitude: string;
        TrackNorthOffset: string;
        TrackNumTurns: number;
        TrackPitSpeedLimit: string;
        TrackType: string;
        TrackDirection: string;
        TrackWeatherType: string;
        TrackSkies: string;
        TrackSurfaceTemp: string;
        TrackAirTemp: string;
        TrackAirPressure: string;
        TrackWindVel: string;
        TrackWindDir: string;
        TrackRelativeHumidity: string;
        TrackFogLevel: string;
        TrackPrecipitation: string;
        TrackCleanup: number;
        TrackDynamicTrack: number;
        TrackVersion: string;
        SeriesID: number;
        SeasonID: number;
        SessionID: number;
        SubSessionID: number;
        LeagueID: number;
        Official: number;
        RaceWeek: number;
        EventType: string;
        Category: string;
        SimMode: string;
        TeamRacing: number;
        MinDrivers: number;
        MaxDrivers: number;
        DCRuleSet: string;
        QualifierMustStartRace: number;
        NumCarClasses: number;
        NumCarTypes: number;
        HeatRacing: number;
        BuildType: string;
        BuildTarget: string;
        BuildVersion: string;
        RaceFarm: string;
        WeekendOptions: {
          NumStarters: number;
          StartingGrid: string;
          QualifyScoring: string;
          CourseCautions: string;
          StandingStart: number;
          ShortParadeLap: number;
          Restarts: string;
          WeatherType: string;
          Skies: string;
          WindDirection: string;
          WindSpeed: string;
          WeatherTemp: string;
          RelativeHumidity: string;
          FogLevel: string;
          TimeOfDay: string;
          Date: string;
          EarthRotationSpeedupFactor: number;
          Unofficial: number;
          CommercialMode: string;
          NightMode: string;
          IsFixedSetup: number;
          StrictLapsChecking: string;
          HasOpenRegistration: number;
          HardcoreLevel: number;
          NumJokerLaps: number;
          IncidentLimit: string;
          FastRepairsLimit: number;
          GreenWhiteCheckeredLimit: number;
        };
        TelemetryOptions: {
          TelemetryDiskFile: string;
        };
      };
      SessionInfo: {
        Sessions: Array<{
          SessionNum: number;
          SessionLaps: string;
          SessionTime: string;
          SessionNumLapsToAvg: number;
          SessionType: string;
          SessionTrackRubberState: string;
          SessionName: string;
          SessionSubType: any;
          SessionSkipped: number;
          SessionRunGroupsUsed: number;
          SessionEnforceTireCompoundChange: number;
          ResultsPositions: Array<{
            Position: number;
            ClassPosition: number;
            CarIdx: number;
            Lap: number;
            Time: number;
            FastestLap: number;
            FastestTime: number;
            LastTime: number;
            LapsLed: number;
            LapsComplete: number;
            JokerLapsComplete: number;
            LapsDriven: number;
            Incidents: number;
            ReasonOutId: number;
            ReasonOutStr: string;
          }>;
          ResultsFastestLap: Array<{
            CarIdx: number;
            FastestLap: number;
            FastestTime: number;
          }>;
          ResultsAverageLapTime: number;
          ResultsNumCautionFlags: number;
          ResultsNumCautionLaps: number;
          ResultsNumLeadChanges: number;
          ResultsLapsComplete: number;
          ResultsOfficial: number;
        }>;
      };
      QualifyResultsInfo?: {
        Results?: Array<{
          Position: number;
          ClassPosition: number;
          CarIdx: number;
          FastestLap: number;
          FastestTime: number;
        }>;
      };
      CameraInfo: {
        Groups: Array<{
          GroupNum: number;
          GroupName: string;
          Cameras: Array<{
            CameraNum: number;
            CameraName: string;
          }>;
          IsScenic?: boolean;
        }>;
      };
      RadioInfo: {
        SelectedRadioNum: number;
        Radios: Array<{
          RadioNum: number;
          HopCount: number;
          NumFrequencies: number;
          TunedToFrequencyNum: number;
          ScanningIsOn: number;
          Frequencies: Array<{
            FrequencyNum: number;
            FrequencyName: string;
            Priority: number;
            CarIdx: number;
            EntryIdx: number;
            ClubID: number;
            CanScan: number;
            CanSquawk: number;
            Muted: number;
            IsMutable: number;
            IsDeletable: number;
          }>;
        }>;
      };
      DriverInfo: {
        DriverCarIdx: number;
        DriverUserID: number;
        PaceCarIdx: number;
        DriverHeadPosX: number;
        DriverHeadPosY: number;
        DriverHeadPosZ: number;
        DriverCarIsElectric: number;
        DriverCarIdleRPM: number;
        DriverCarRedLine: number;
        DriverCarEngCylinderCount: number;
        DriverCarFuelKgPerLtr: number;
        DriverCarFuelMaxLtr: number;
        DriverCarMaxFuelPct: number;
        DriverCarGearNumForward: number;
        DriverCarGearNeutral: number;
        DriverCarGearReverse: number;
        DriverCarSLFirstRPM: number;
        DriverCarSLShiftRPM: number;
        DriverCarSLLastRPM: number;
        DriverCarSLBlinkRPM: number;
        DriverCarVersion: string;
        DriverPitTrkPct: number;
        DriverCarEstLapTime: number;
        DriverSetupName: string;
        DriverSetupIsModified: number;
        DriverSetupLoadTypeName: string;
        DriverSetupPassedTech: number;
        DriverIncidentCount: number;
        Drivers: Array<{
          CarIdx: number;
          UserName: string;
          AbbrevName?: string;
          Initials?: string;
          UserID: number;
          TeamID: number;
          TeamName: string;
          CarNumber: string;
          CarNumberRaw: number;
          CarPath: string;
          CarClassID: number;
          CarID: number;
          CarIsPaceCar: number;
          CarIsAI: number;
          CarIsElectric: number;
          CarScreenName: string;
          CarScreenNameShort: string;
          CarClassShortName: string;
          CarClassRelSpeed: number;
          CarClassLicenseLevel: number;
          CarClassMaxFuelPct: string;
          CarClassWeightPenalty: string;
          CarClassPowerAdjust: string;
          CarClassDryTireSetLimit: string;
          CarClassColor: number;
          CarClassEstLapTime: number;
          IRating: number;
          LicLevel: number;
          LicSubLevel: number;
          LicString: string;
          LicColor: number;
          IsSpectator: number;
          CarDesignStr: string;
          HelmetDesignStr: string;
          SuitDesignStr: string;
          BodyType: number;
          FaceType: number;
          HelmetType: number;
          CarNumberDesignStr: string;
          CarSponsor_1: number;
          CarSponsor_2: number;
          ClubName: string;
          ClubID: number;
          DivisionName: string;
          DivisionID: number;
          CurDriverIncidentCount: number;
          TeamIncidentCount: number;
        }>;
      };
      SplitTimeInfo: {
        Sectors: Array<{
          SectorNum: number;
          SectorStartPct: number;
        }>;
      };
      CarSetup: {
        UpdateCount: number;
        TiresAero: {
          TireType: {
            TireType: string;
          };
          LeftFrontTire: {
            StartingPressure: string;
            LastHotPressure: string;
            LastTempsOMI: string;
            TreadRemaining: string;
          };
          LeftRearTire: {
            StartingPressure: string;
            LastHotPressure: string;
            LastTempsOMI: string;
            TreadRemaining: string;
          };
          RightFront: {
            StartingPressure: string;
            LastHotPressure: string;
            LastTempsIMO: string;
            TreadRemaining: string;
          };
          RightRearTire: {
            StartingPressure: string;
            LastHotPressure: string;
            LastTempsIMO: string;
            TreadRemaining: string;
          };
          AeroSettings: {
            FrontDivePlanes: string;
            DeckGurneySetting: string;
            RearWingAngle: string;
            RearWingFlapAngle: string;
          };
          AeroCalculator: {
            FrontRhAtSpeed: string;
            RearRhAtSpeed: string;
            DownforceBalance: string;
            LD: number;
          };
        };
        Chassis: {
          Front: {
            HeaveSpring: string;
            HeavePerchOffset: string;
            HeaveSpringDefl: string;
            HeaveSliderDefl: string;
            PushrodLengthAdj: string;
            ArbSize: string;
            ArbSetting: string;
            ToeIn: string;
          };
          LeftFront: {
            CornerWeight: string;
            RideHeight: string;
            SpringPerchOffset: string;
            SpringRate: string;
            SpringDefl: string;
            ShockDefl: string;
            Camber: string;
          };
          LeftRear: {
            CornerWeight: string;
            RideHeight: string;
            SpringPerchOffset: string;
            SpringRate: string;
            SpringDefl: string;
            ShockDefl: string;
            Camber: string;
            ToeIn: string;
          };
          BrakesInCarMisc: {
            HeadlightLedColor: string;
            FrontMasterCyl: string;
            RearMasterCyl: string;
            BrakePressureBias: string;
            TractionControl: string;
            ThrottleShape: number;
            CrossWeight: string;
            NoseWeight: string;
          };
          RightFront: {
            CornerWeight: string;
            RideHeight: string;
            SpringPerchOffset: string;
            SpringRate: string;
            SpringDefl: string;
            ShockDefl: string;
            Camber: string;
          };
          RightRear: {
            CornerWeight: string;
            RideHeight: string;
            SpringPerchOffset: string;
            SpringRate: string;
            SpringDefl: string;
            ShockDefl: string;
            Camber: string;
            ToeIn: string;
          };
          Rear: {
            ThirdSpring: string;
            ThirdPerchOffset: string;
            ThirdSpringDefl: string;
            ThirdSliderDefl: string;
            ArbSize: string;
            ArbSetting: string;
            PushrodLengthAdj: string;
            FuelLevel: string;
            DiffPreload: string;
          };
        };
        Dampers: {
          LeftFrontDamper: {
            LsCompDamping: string;
            HsCompDamping: string;
            LsRbdDamping: string;
            HsRbdDamping: string;
          };
          LeftRearDamper: {
            LsCompDamping: string;
            HsCompDamping: string;
            LsRbdDamping: string;
            HsRbdDamping: string;
          };
          RightFrontDamper: {
            LsCompDamping: string;
            HsCompDamping: string;
            LsRbdDamping: string;
            HsRbdDamping: string;
          };
          RightRearDamper: {
            LsCompDamping: string;
            HsCompDamping: string;
            LsRbdDamping: string;
            HsRbdDamping: string;
          };
        };
      };
    };
  }

  // Define the irEvent type as a union of string literals
  type irEvent =
    | 'TelemetryDescription'
    | 'Telemetry'
    | 'SessionInfo'
    | 'Connected'
    | 'Disconnected'
    | 'update';

  interface irInstance {
    telemetry: ITelemetry | IrDataUnk;
    telemetryDescription: string | object | IrDataUnk; // telemetry description as string or object
    sessionInfo: ISessionInfo | IrDataUnk; // session info as object or null
    Consts: IrSdkConsts | IrDataUnk;
    camControls: {
      setState: (state: CameraState) => void;
      switchToCar: (
        carIdx: carInt,
        group: number | undefined,
        camera: number | undefined
      ) => void;
      switchToPos: (
        carPos: number,
        group: number | undefined,
        camera: number | undefined
      ) => void;
    };
    playbackControls: {
      play: () => void;
      pause: () => void;
      fastForward: {
        (speed: number): void; // 2-16 def 2 (double speed)
        (): void;
      };
      rewind: {
        (speed: number): void; // 2-16 def 2 (double speed)
        (): void;
      };
      slowForward: {
        (divider: number): void; // 2-16 def 2 (half speed)
        (): void;
      };
      slowBackward: {
        (divider: number): void; // 2-16 def 2 (half speed)
        (): void;
      };
      search: (mode: RpySrchMode) => void;
      searchTs: (sessionNum: number, sessionTimeMS: number) => void;
      searchFrame: (frameNum: number, rpyPosMode: RpyPosMode) => void;
    };
    execCmd: (msgId: number, ...args: number[]) => any;
    reloadTextures: () => void;
    reloadTexture: (carIdx: number) => void;
    execChatCmd: (msgId: ChatCommand, arg: number) => any;
    execChatMacro: (macro: ChatMacro) => any; // Chat macro command 0-15
    execPitCmd: {
      (cmd: PitCommand, arg: number): any;
      (cmd: PitCommand): any;
    };
    execTelemetryCmd: (cmd: TelemCommand) => any;
    on: (event: irEvent, callback: (evt: any) => any) => void;
    sessionInfoParser: sessionInfoParser | null;
  }

  interface IRacingSDK {
    init: {
      (options: irOptions): void;
      (): void;
    };
    getInstance: () => irInstance;
  }
  const irsdk: IRacingSDK;
  export = irsdk;
}
// This module declaration allows TypeScript to recognize the iracing-sdk-js module
