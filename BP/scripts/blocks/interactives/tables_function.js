import { world } from '@minecraft/server';

world.beforeEvents.worldInitialize.subscribe(eventData => {

  eventData.blockComponentRegistry.registerCustomComponent('fbd:blocks_conection_function', {
    onTick(e) {
      const { block } = e;
      const north = block.north();
      const east = block.east();
      const south = block.south();
      const west = block.west();
      if (north?.typeId === block.typeId) block.setPermutation(block.permutation.withState('fbd:south_block_connection', north ? 1 : 0));
      else block.setPermutation(block.permutation.withState('fbd:south_block_connection', 0));

      if (south?.typeId === block.typeId) block.setPermutation(block.permutation.withState('fbd:north_block_connection', south ? 1 : 0));
      else block.setPermutation(block.permutation.withState('fbd:north_block_connection', 0));

      if (east?.typeId === block.typeId) block.setPermutation(block.permutation.withState('fbd:west_block_connection', east ? 1 : 0));
      else block.setPermutation(block.permutation.withState('fbd:west_block_connection', 0));

      if (west?.typeId === block.typeId) block.setPermutation(block.permutation.withState('fbd:east_block_connection', west ? 1 : 0));
      else block.setPermutation(block.permutation.withState('fbd:east_block_connection', 0));
    }
  });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
  eventData.blockComponentRegistry.registerCustomComponent('x:wc', {
    onTick(e) {
      const { block } = e;
      const north = block.north();
      const east = block.east();
      const south = block.south();
      const west = block.west();

      const excludeBlocksArray = [
        'minecraft:air',
        'minecraft:wooden_door',
        'minecraft:iron_door',
        'minecraft:acacia_door',
        'minecraft:birch_door',
        'minecraft:crimson_door',
        'minecraft:dark_oak_door',
        'minecraft:jungle_door',
        'minecraft:short_grass',
        'minecraft:poppy',
        'minecraft:tall_grass',
        'minecraft:fern',
        'minecraft:pink_tulip',
        'minecraft:white_tulip',
        'minecraft:orange_tulip',
        'minecraft:red_tulip',
        'minecraft:allium',
        'minecraft:blue_orchid',
        'minecraft:lily_of_the_valley',
        'minecraft:sunflower',
        'minecraft:pink_petals',
        'minecraft:pitcher_plant',
        'minecraft:wither_rose',
        'minecraft:torchflower',
        'minecraft:deadbush',
        'minecraft:warped_roots',
        'minecraft:crimson_roots',
        'minecraft:twisting_vines',
        'minecraft:azalea',
        'minecraft:flowering_azalea',
        'minecraft:big_dripleaf',
        'minecraft:red_mushroom',
        'minecraft:birch_leaves',
        'minecraft:soul_campfire',
        'minecraft:campfire',
        'minecraft:lantern',
        'minecraft:soul_lantern',
        'minecraft:soul_torch',
        'minecraft:torch',
        'minecraft:reeds',
        'minecraft:flower_pot',
        'minecraft:sea_pickle',
        'minecraft:standing_sign',
        'minecraft:wall_sign',
        'minecraft:spruce_standing_sign',
        'minecraft:spruce_wall_sign',
        'minecraft:acacia_standing_sign',
        'minecraft:acacia_wall_sign',
        'minecraft:jungle_standing_sign',
        'minecraft:jungle_wall_sign',
        'minecraft:birch_standing_sign',
        'minecraft:birch_wall_sign',
        'minecraft:darkoak_standing_sign',
        'minecraft:darkoak_wall_sign',
        'minecraft:cherry_standing_sign',
        'minecraft:cherry_wall_sign',
        'minecraft:birch_standing_sign',
        'minecraft:birch_wall_sign',
        'minecraft:mangrove_standing_sign',
        'minecraft:mangrove_wall_sign',
        'minecraft:bamboo_standing_sign',
        'minecraft:bamboo_wall_sign',
        'minecraft:warped_standing_sign',
        'minecraft:warped_wall_sign',
        'minecraft:crimson_standing_sign',
        'minecraft:crimson_wall_sign',
        'minecraft:brown_mushroom',
        'minecraft:frame',
        'minecraft:flowing_water',
        'minecraft:waterlily',
        'minecraft:flowing_lava',
        'minecraft:chest',
        'minecraft:ender_chest',
        'minecraft:trapped_chest',
        'minecraft:barrel',
        'minecraft:undyed_shulker_box',
        'minecraft:white_shulker_box',
        'minecraft:orange_shulker_box',
        'minecraft:magenta_shulker_box',
        'minecraft:light_blue_shulker_box',
        'minecraft:yellow_shulker_box',
        'minecraft:light_gray_shulker_box',
        'minecraft:gray_shulker_box',
        'minecraft:blue_shulker_box',
        'minecraft:purple_shulker_box',
        'minecraft:pink_shulker_box',
        'minecraft:red_shulker_box',
        'minecraft:black_shulker_box',
        'minecraft:brown_shulker_box',
        'minecraft:green_shulker_box',
        'minecraft:black_shulker_box',
        'minecraft:lime_shulker_box',
        'minecraft:crimson_fungus',
        'minecraft:warped_fungus',
        'minecraft:oak_leaves',
        'minecraft:spruce_leaves',
        'minecraft:cherry_leaves',
        'minecraft:jungle_leaves',
        'minecraft:dark_oak_leaves',
        'minecraft:acacia_leaves',
        'minecraft:mangrove_leaves',
        'minecraft:azalea_leaves',
        'minecraft:large_fern',
        'minecraft:yellow_flower',
        'minecraft:azure_bluet',
        'minecraft:cornflower',
        'minecraft:oxeye_daisy',
        'minecraft:rose_bush',
        'minecraft:peony',
        'minecraft:lilac',
        'minecraft:oak_door',
        'minecraft:spruce_door',
        'minecraft:warped_door',
        'minecraft:mangrove_door',
        'minecraft:cherry_door',
        'minecraft:bamboo_door',
        'minecraft:iron_trapdoor',
        'minecraft:acacia_trapdoor',
        'minecraft:birch_trapdoor',
        'minecraft:crimson_trapdoor',
        'minecraft:dark_oak_trapdoor',
        'minecraft:jungle_trapdoor',
        'minecraft:oak_trapdoor',
        'minecraft:spruce_trapdoor',
        'minecraft:warped_trapdoor',
        'minecraft:mangrove_trapdoor',
        'minecraft:cherry_trapdoor',
        'minecraft:bamboo_trapdoor',
        'minecraft:trapdoor',
        'minecraft:glass',
        'minecraft:glass_pane'
      ];
      const northConnects = !excludeBlocksArray.includes(north?.typeId);
      const eastConnects = !excludeBlocksArray.includes(east?.typeId);
      const southConnects = !excludeBlocksArray.includes(south?.typeId);
      const westConnects = !excludeBlocksArray.includes(west?.typeId);
      block.setPermutation(block.permutation.withState('x:north_bc', northConnects ? 1 : 0));
      block.setPermutation(block.permutation.withState('x:south_bc', southConnects ? 1 : 0));
      block.setPermutation(block.permutation.withState('x:east_bc', eastConnects ? 1 : 0));
      block.setPermutation(block.permutation.withState('x:west_bc', westConnects ? 1 : 0));
    }
  });
});

world.beforeEvents.worldInitialize.subscribe(eventData => {
  eventData.blockComponentRegistry.registerCustomComponent('fbd:pipes', {
    onTick(e) {
      const { block } = e;
      const north = block.north();
      const east = block.east();
      const south = block.south();
      const west = block.west();
      const above = block.above();
      const below = block.below();

      const excludeBlocksArray = [
        'minecraft:air',
        'minecraft:wooden_door',
        'minecraft:iron_door',
        'minecraft:acacia_door',
        'minecraft:birch_door',
        'minecraft:crimson_door',
        'minecraft:dark_oak_door',
        'minecraft:jungle_door',
        'minecraft:short_grass',
        'minecraft:poppy',
        'minecraft:tall_grass',
        'minecraft:fern',
        'minecraft:pink_tulip',
        'minecraft:white_tulip',
        'minecraft:orange_tulip',
        'minecraft:red_tulip',
        'minecraft:allium',
        'minecraft:blue_orchid',
        'minecraft:lily_of_the_valley',
        'minecraft:sunflower',
        'minecraft:pink_petals',
        'minecraft:pitcher_plant',
        'minecraft:wither_rose',
        'minecraft:torchflower',
        'minecraft:deadbush',
        'minecraft:warped_roots',
        'minecraft:crimson_roots',
        'minecraft:twisting_vines',
        'minecraft:azalea',
        'minecraft:flowering_azalea',
        'minecraft:big_dripleaf',
        'minecraft:red_mushroom',
        'minecraft:birch_leaves',
        'minecraft:soul_campfire',
        'minecraft:campfire',
        'minecraft:lantern',
        'minecraft:soul_lantern',
        'minecraft:soul_torch',
        'minecraft:torch',
        'minecraft:reeds',
        'minecraft:flower_pot',
        'minecraft:sea_pickle',
        'minecraft:standing_sign',
        'minecraft:wall_sign',
        'minecraft:spruce_standing_sign',
        'minecraft:spruce_wall_sign',
        'minecraft:acacia_standing_sign',
        'minecraft:acacia_wall_sign',
        'minecraft:jungle_standing_sign',
        'minecraft:jungle_wall_sign',
        'minecraft:birch_standing_sign',
        'minecraft:birch_wall_sign',
        'minecraft:darkoak_standing_sign',
        'minecraft:darkoak_wall_sign',
        'minecraft:cherry_standing_sign',
        'minecraft:cherry_wall_sign',
        'minecraft:birch_standing_sign',
        'minecraft:birch_wall_sign',
        'minecraft:mangrove_standing_sign',
        'minecraft:mangrove_wall_sign',
        'minecraft:bamboo_standing_sign',
        'minecraft:bamboo_wall_sign',
        'minecraft:warped_standing_sign',
        'minecraft:warped_wall_sign',
        'minecraft:crimson_standing_sign',
        'minecraft:crimson_wall_sign',
        'minecraft:brown_mushroom',
        'minecraft:frame',
        'minecraft:flowing_water',
        'minecraft:waterlily',
        'minecraft:flowing_lava',
        'minecraft:chest',
        'minecraft:ender_chest',
        'minecraft:trapped_chest',
        'minecraft:barrel',
        'minecraft:undyed_shulker_box',
        'minecraft:white_shulker_box',
        'minecraft:orange_shulker_box',
        'minecraft:magenta_shulker_box',
        'minecraft:light_blue_shulker_box',
        'minecraft:yellow_shulker_box',
        'minecraft:light_gray_shulker_box',
        'minecraft:gray_shulker_box',
        'minecraft:blue_shulker_box',
        'minecraft:purple_shulker_box',
        'minecraft:pink_shulker_box',
        'minecraft:red_shulker_box',
        'minecraft:black_shulker_box',
        'minecraft:brown_shulker_box',
        'minecraft:green_shulker_box',
        'minecraft:black_shulker_box',
        'minecraft:lime_shulker_box',
        'minecraft:crimson_fungus',
        'minecraft:warped_fungus',
        'minecraft:oak_leaves',
        'minecraft:spruce_leaves',
        'minecraft:cherry_leaves',
        'minecraft:jungle_leaves',
        'minecraft:dark_oak_leaves',
        'minecraft:acacia_leaves',
        'minecraft:mangrove_leaves',
        'minecraft:azalea_leaves',
        'minecraft:large_fern',
        'minecraft:yellow_flower',
        'minecraft:azure_bluet',
        'minecraft:cornflower',
        'minecraft:oxeye_daisy',
        'minecraft:rose_bush',
        'minecraft:peony',
        'minecraft:lilac',
        'minecraft:oak_door',
        'minecraft:spruce_door',
        'minecraft:warped_door',
        'minecraft:mangrove_door',
        'minecraft:cherry_door',
        'minecraft:bamboo_door',
        'minecraft:iron_trapdoor',
        'minecraft:acacia_trapdoor',
        'minecraft:birch_trapdoor',
        'minecraft:crimson_trapdoor',
        'minecraft:dark_oak_trapdoor',
        'minecraft:jungle_trapdoor',
        'minecraft:oak_trapdoor',
        'minecraft:spruce_trapdoor',
        'minecraft:warped_trapdoor',
        'minecraft:mangrove_trapdoor',
        'minecraft:cherry_trapdoor',
        'minecraft:bamboo_trapdoor',
        'minecraft:trapdoor',
        'minecraft:glass',
        'minecraft:glass_pane',
        'fb:stars',
        'fb:wires'
      ];
      const northConnects = !excludeBlocksArray.includes(north?.typeId);
      const eastConnects = !excludeBlocksArray.includes(east?.typeId);
      const southConnects = !excludeBlocksArray.includes(south?.typeId);
      const westConnects = !excludeBlocksArray.includes(west?.typeId);
      const aboveConnects = !excludeBlocksArray.includes(above?.typeId);
      const belowConnects = !excludeBlocksArray.includes(below?.typeId);
      block.setPermutation(block.permutation.withState('x:north_bc', northConnects ? 1 : 0));
      block.setPermutation(block.permutation.withState('x:south_bc', southConnects ? 1 : 0));
      block.setPermutation(block.permutation.withState('x:east_bc', eastConnects ? 1 : 0));
      block.setPermutation(block.permutation.withState('x:west_bc', westConnects ? 1 : 0));
      block.setPermutation(block.permutation.withState('x:above_bc', aboveConnects ? 1 : 0));
      block.setPermutation(block.permutation.withState('x:below_bc', belowConnects ? 1 : 0));
    }
  });
});