import { Member } from "../../dto";

class MemoryMap {
  private static uniqueInstance: MemoryMap;

  memberMap: Map<string, Member>;

  private constructor() {
    this.memberMap = new Map<string, Member>();
  }

  static getInstance(): MemoryMap {
    if (this.uniqueInstance === undefined) {
      this.uniqueInstance = new MemoryMap();
    }
    return this.uniqueInstance;
  }
}

export default MemoryMap;
