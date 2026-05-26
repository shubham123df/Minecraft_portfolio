import {
  PickaxeIcon,
  RedstoneIcon,
  DiamondIcon,
  ChestIcon,
  ShieldIcon,
  CompassIcon,
  BookIcon,
  EmeraldIcon,
  GrassIcon,
  EnderIcon,
  PaintingIcon,
  SwordIcon,
  HeartIcon,
} from './MinecraftIcons';

export const iconMap = {
  pickaxe: PickaxeIcon,
  redstone: RedstoneIcon,
  diamond: DiamondIcon,
  chest: ChestIcon,
  shield: ShieldIcon,
  compass: CompassIcon,
  book: BookIcon,
  emerald: EmeraldIcon,
  grass: GrassIcon,
  ender: EnderIcon,
  painting: PaintingIcon,
  sword: SwordIcon,
  heart: HeartIcon,
};

export function getIcon(name) {
  return iconMap[name] ?? DiamondIcon;
}
