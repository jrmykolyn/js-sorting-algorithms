$( document ).ready( function() {
	/* -------------------------------------------------- */
	/* DECLARE VARS */
	/* -------------------------------------------------- */
	var arr1 = buildRandomIntegerArray( 5 ),
		arr2 = buildRandomIntegerArray( 8 ),
		arr3 = buildRandomIntegerArray( 10 ),
		arr4 = buildRandomIntegerArray( 25 );
		arr5 = buildRandomIntegerArray( 50 );



	/* -------------------------------------------------- */
	/* DECLARE FUNCTIONS */
	/* -------------------------------------------------- */
	function buildRandomIntegerArray( arrayLength ) {
		arrayLength = ( typeof arrayLength === 'number' ) ? arrayLength : 10;

		var arr = [];

		for ( var i = 0; i < arrayLength; i ++ ) {
			arr.push( Math.round(Math.random()*100) );
		}

		return arr;
	}


	/**
	 * ...
	 */
	function doBubbleSort( arr ) {
		// Create duplicate of `arr` arg. via `.slice()`.
		arr = arr.slice(0);

		// Assign `counter` in order to:
		// - record total loop iterations;
		// - have value to check against when attempting to exit loop.
		var counter = 0;

		// Initialize `performed_swap` to determine whether a
		// loop featured no 'swaps'.
		var performed_swap;

		// Repeat the block below until either:
		// - the `counter` var. is equal to the length of the input minus 1;
		// - OR
		// - No 'swaps' were performed during one loop over the input array.
		while ( counter < ( arr.length - 1 ) && performed_swap !== false ) {
			// Reset `performed_swap` to `false` at the beginning of each 'outer pass'
			performed_swap = false;

			// Loop over the array, excluding the last member.
			for ( var i = 0, x = ( arr.length - 1 ); i < x; i++ ) {
				// Store the values at the current and next indices.
				var current_val = arr[i],
					next_val = arr[i + 1];

				// If the 'current' value is greater than the 'next' value,
				// 'swap' them and update the `performed_swap` var.
				if ( current_val > next_val ) {
					arr[i] = next_val;
					arr[i + 1] = current_val;

					performed_swap = true;
				}
			}

			// Update `counter`
			counter++;
		}

		// Return the sorted array.
		return arr;
	}

	/**
	 * ...
	 */
	function doInsertionSort( arr ) {
		// Create duplicate of `arr` arg. via `.slice()`.
		arr = arr.slice(0);

		// Loop over `arr`.
		for ( var i = 0, x = arr.length; i < x; i++ ) {
			// If iteration is first in loop, skip logic.
			if ( i === 0 ) { continue; }

			// Assign local variables for:
			// - values to compare;
			// - position of value 'to check' 
			var current_val = arr[i];
			var check_pos = ( i - 1 );
			var check_val = arr[ check_pos ];

			// If the value 'to the left' is greater than the 'current' value,
			// and the position 'to the left' is 0 or greater:
			while ( check_pos >= 0 && current_val < check_val ) {
				// Swap the two values.
				arr[ check_pos ] = current_val;
				arr[ check_pos + 1 ] = check_val;

				// Decrement the position 'to check'.
				check_pos--;

				// Update the value 'to check'.
				check_val = arr[ check_pos ];
			}
		}

		// Return the sorted array.
		return arr;
 	}


	/**
	 * ...
	 */
	function doSelectionSort( arr ) {
		// Create duplicate of `arr` arg. via `.slice()`.
		arr = arr.slice(0)

		// Start 'outer loop' over `arr`.
		for ( var i = 0, x = arr.length; i < x; i++ ) {

			// Update `min_val`: set equal to the number at position `i`.
			var min_val = arr[i]

			// Start 'inner loop' over `arr`.
			for ( var j = ( i + 1 ); j < x; j++ ) {

				// If the current 'inner loop' array item is less than `min_val`:
				if ( arr[j] < min_val ) {

					// Update `min_val`: set equal to current item.
					min_val = arr[j];

					// Swap the current item with the item at position `i`.
					arr[j] = arr[i];
					arr[i] = min_val;
				}
			}
		}

		// Return the sorted array.
		return arr;
	}


	/**
	 * ...
	 *
	 * TODO:
	 * Update function to accept input as  1-dimensional array, split into 2-dimensional on intial invocation.
	 */
	function doMergeSort( arr ) {
		// Initialize empty array for 'sorted' values.
		var sorted = [];
		var position;
		var sorted_arr_pos;
		var arr_is_even = ( arr.length % 2 === 0 );

		// If `arr` has more than 1x member:
		if ( arr.length > 1 ) {

			// Add empty arrays to `sorted`.
			while ( sorted.length < Math.floor( arr.length / 2 ) ) {
				sorted.push( [] );
			}

			// Loop over contents of `arr`.
			// ...
			for ( var i = 0, x = arr.length; i < x; i++ ) {
				// Set `position` equal to current value of `i`.
				// A separate variable is required, as we may need to change the value of
				// `position` within the current loop iteration.
				position = i;

				// Set `sorted_arr_pos` to the current `position` divided by 2, rounded down.
				// This var stores the position of the empty array that we'll be sorting *into*.
				sorted_arr_pos = Math.floor( position / 2 );

				// If current index is *not* an even number, skip current iteration.
				if ( i % 2 !== 0 ) {
					continue;
				}

				// Block below handles special cases where:
				// - Current iteration is last in array;
				// - Array length is an odd number (eg. 5).
				//
				// TODO:
				// Expand on support comment/documentation
				if ( i === arr.length - 1 && !arr_is_even ) {
					// Set `arr[ position - 1 ]` equal to `sorted[ sorted.length - 1 ]`;
					arr[ position - 1 ] = sorted[ sorted.length - 1 ];

					// Empty last sub-array within `sorted`.
					sorted[ sorted.length - 1 ] = [];

					// Decrement `position` and `sorted_arr_pos`.
					position--;
					sorted_arr_pos--;
				}

				// If both the array member at `position` and `position + 1` are not emtpy:
				// - Compare the first members of the arrays at `position and `position + 1`;
				// - ...
				while ( arr[ position ].length && arr[ position + 1 ].length ) {
					if ( arr[ position ][ 0 ] > arr[ position + 1 ][ 0 ] ) {
						sorted[ sorted_arr_pos ].push( arr[ position ].shift() );
					} else {
						sorted[ sorted_arr_pos ].push( arr[ position + 1 ].shift() );
					}
				}

				// If either of the arrays being compared *are not* empty:
				// Add any remaining members to array at `sorted_arr_pos`.
				if ( arr[ position ].length ) {
					sorted[ sorted_arr_pos ] = sorted[ sorted_arr_pos ].concat( arr[ position ] );
				} else if ( arr[ position + 1 ].length ) {
					sorted[ sorted_arr_pos ] =  sorted[ sorted_arr_pos ].concat( arr[ position + 1 ] );
				}
			}

			// Rescursively call `doMergeSort()` with `sorted` array.
			// Assign result to original `arr` arg.
			arr = doMergeSort( sorted );

		// Else if `arr` has exactly 1x member which is an array:
		// - sorting process is complete;
		// - ...
		} else if ( arr.length === 1 && Array.isArray( arr[ 0 ] ) ) {

			// Return sorted array to initial callsite.
			return arr[ 0 ].reverse();
		}

		// Return updated array to callsite, which will be either:
		// - `doMergeSort()` (in the case of a recusive function call);
		// - OR
		// - outermost context (in case where initial invocation received invalid args.).
		return arr;
	}



	/* -------------------------------------------------- */
	/* INIT */
	/* -------------------------------------------------- */
	var arr1_sorted = doMergeSort( arr1.map( function( item ) { return [ item ]; } ) );
	console.log( arr1 ); /// TEMP
	console.log( arr1_sorted ); /// TEMP

	var arr2_sorted = doMergeSort( arr2.map( function( item ) { return [ item ]; } ) );
	console.log( arr2 ); /// TEMP
	console.log( arr2_sorted ); /// TEMP

	var arr3_sorted = doMergeSort( arr3.map( function( item ) { return [ item ]; } ) );
	console.log( arr3 ); /// TEMP
	console.log( arr3_sorted ); /// TEMP

	var arr4_sorted = doMergeSort( arr4.map( function( item ) { return [ item ]; } ) );
	console.log( arr4 ); /// TEMP
	console.log( arr4_sorted ); /// TEMP
} );